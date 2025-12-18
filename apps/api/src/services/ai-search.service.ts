/**
 * AI Search Service
 * Implements RAG (Retrieval-Augmented Generation) for semantic business search
 */

import { prisma } from '../utils/prisma';
import { embedText } from '../utils/embed-client';
import { cacheService } from '../utils/redis';
import { logger } from '../utils/logger';
import CryptoJS from 'crypto-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

type ChatProvider = 'openai' | 'gemini';

interface SearchResult {
  answer: string;
  businesses: BusinessMatch[];
  cached: boolean;
}

interface BusinessMatch {
  id: number;
  name: string;
  description: string | null;
  summary: string;
  category: string;
  district: string;
  score: number;
}

function getChatProvider(): ChatProvider {
  const provider = (
    process.env.AI_PROVIDER ||
    process.env.AI_CHAT_PROVIDER ||
    'openai'
  ).toLowerCase();

  if (provider === 'gemini') {
    return 'gemini';
  }

  return 'openai';
}

/**
 * Calculate cosine similarity between two vectors
 */
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  normA = Math.sqrt(normA);
  normB = Math.sqrt(normB);

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dotProduct / (normA * normB);
}

/**
 * Generate cache key for search query
 */
function generateCacheKey(question: string, city?: string): string {
  const text = `${question}|${city || 'all'}`;
  const hash = CryptoJS.MD5(text).toString();
  return `ai:q:${hash}`;
}

/**
 * Build AI prompt for RAG
 */
function buildPrompt(question: string, businesses: BusinessMatch[]): string {
  const businessesJson = JSON.stringify(
    businesses.map((b) => ({
      name: b.name,
      category: b.category,
      district: b.district,
      description: b.description || b.summary,
      relevance: b.score.toFixed(2),
    })),
    null,
    2
  );

  return `Та Yellow Books-ийн туслах бөгөөд Улаанбаатар хотын бизнесүүдийн талаар мэдээлэл өгдөг.

Хэрэглэгчийн асуулт: "${question}"

Ашиглах боломжтой бизнесүүдийн мэдээлэл:
${businessesJson}

Дүрэм:
- Зөвхөн өгөгдсөн JSON мэдээлэл ашиглан хариулна уу
- Монгол хэлээр, найрсаг өнгө аясаар хариулна уу
- 3-5 бизнес санал болгоно уу (хамгийн тохиромжтой эхэлж)
- Бизнесийн нэр болон дүүргийг дурдана уу
- Хэрэв тохирох зүйл олдохгүй бол үнэнийг хэлнэ үү
- Товч бөгөөд ойлгомжтой байна уу

Хариулт:`;
}

/**
 * Call AI Chat Completion API
 */
async function callAIChat(prompt: string): Promise<string> {
  const provider = getChatProvider();

  // Gemini via official SDK
  if (provider === 'gemini') {
    const apiKey =
      process.env.GEMINI_API_KEY || process.env.AI_API_KEY || undefined;

    if (!apiKey) {
      throw new Error(
        'GEMINI_API_KEY or AI_API_KEY must be set for Gemini chat'
      );
    }

    const modelName = process.env.AI_CHAT_MODEL as string;

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      if (!text) {
        throw new Error('Empty response from Gemini chat model');
      }

      return text;
    } catch (error) {
      logger.error('Error calling Gemini Chat API:', error);
      throw error;
    }
  }

  // OpenAI-style HTTP chat completions
  const chatUrl = process.env.AI_CHAT_URL;
  const apiKey = process.env.AI_API_KEY;

  if (!chatUrl || !apiKey) {
    throw new Error(
      'AI_CHAT_URL and AI_API_KEY must be set in environment variables for OpenAI chat provider'
    );
  }

  try {
    const response = await fetch(chatUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.AI_CHAT_MODEL || 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Та Yellow Books-ийн туслах бөгөөд Улаанбаатар хотын бизнесүүдийн талаар мэдээлэл өгдөг. Монгол хэлээр найрсаг байдлаар хариулна.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI Chat API error: ${response.status} - ${errorText}`);
    }

    interface OpenAIResponse {
      choices: Array<{
        message: {
          content: string;
        };
      }>;
    }
    const json = (await response.json()) as OpenAIResponse;
    return json.choices[0].message.content;
  } catch (error) {
    logger.error('Error calling AI Chat API:', error);
    throw error;
  }
}

/**
 * AI Search Service
 */
export class AiSearchService {
  /**
   * Perform semantic search with AI-generated answer
   */
  async search(
    question: string,
    city?: string,
    topN = 5
  ): Promise<SearchResult> {
    // Generate cache key
    const cacheKey = generateCacheKey(question, city);

    // Check cache
    const cached = await cacheService.get<SearchResult>(cacheKey);
    if (cached) {
      logger.info(`Cache hit for query: ${question}`);
      return { ...cached, cached: true };
    }

    logger.info(`Cache miss for query: ${question}, performing search...`);

    try {
      // Step 1: Embed the question
      const queryEmbedding = await embedText(question);

      // Step 2: Retrieve candidate businesses
      const whereClause: {
        embedding?: { not: { equals: null } };
        isActive: boolean;
        addresses?: { some: { address: { contains: string } } };
      } = {
        isActive: true,
      };

      // Filter by embedding (not null) - Prisma JSON filter
      whereClause.embedding = { not: { equals: null } };

      // Filter by city if provided
      if (city) {
        whereClause.addresses = {
          some: {
            address: {
              contains: city,
            },
          },
        };
      }

      const candidates = await prisma.business.findMany({
        where: whereClause,
        take: 500, // Retrieve more candidates for better filtering
        include: {
          category: {
            include: {
              parentCategory: true,
            },
          },
          addresses: true,
        },
      });

      logger.info(`Retrieved ${candidates.length} candidate businesses`);

      // Step 3: Calculate similarity scores
      const scored = candidates
        .filter((c) => c.embedding !== null)
        .map((c) => {
          const embedding = c.embedding as unknown as number[];
          const score = cosineSimilarity(queryEmbedding, embedding);

          // Extract district from address
          const district =
            c.addresses.length > 0
              ? c.addresses[0].address.split(',')[0].trim()
              : 'Unknown';

          return {
            id: c.id,
            name: c.name,
            description: c.description,
            summary: c.summary,
            category: c.category.name,
            district,
            score,
          };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, topN);

      logger.info(`Top ${scored.length} businesses selected`);

      // Step 4: Build prompt and call AI
      if (scored.length === 0) {
        const result: SearchResult = {
          answer:
            'Уучлаарай, таны хайлтад тохирох бизнес олдсонгүй. Өөр асуулт асууна уу эсвэл хайлтын нөхцлөө өөрчилнө үү.',
          businesses: [],
          cached: false,
        };

        // Cache the result
        await cacheService.set(cacheKey, result, 1800); // 30 minutes

        return result;
      }

      const prompt = buildPrompt(question, scored);
      const answer = await callAIChat(prompt);

      const result: SearchResult = {
        answer: answer.trim(),
        businesses: scored,
        cached: false,
      };

      // Cache the result
      await cacheService.set(cacheKey, result, 1800); // 30 minutes TTL

      logger.info(`Search completed and cached for query: ${question}`);

      return result;
    } catch (error) {
      logger.error('Error in AI search:', error);
      throw error;
    }
  }

  /**
   * Clear cache for a specific query
   */
  async clearCache(question: string, city?: string): Promise<boolean> {
    const cacheKey = generateCacheKey(question, city);
    return await cacheService.delete(cacheKey);
  }

  /**
   * Clear all AI search cache
   */
  async clearAllCache(): Promise<number> {
    return await cacheService.deletePattern('ai:q:*');
  }
}

/**
 * AI Embedding Client Wrapper
 * Wraps the AI embedding API for generating text embeddings
 *
 * Supports:
 * - OpenAI-compatible APIs (default, via fetch)
 * - Google Gemini Embeddings (via @google/generative-ai)
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

type AIProvider = 'openai' | 'gemini';

interface OpenAIEmbeddingResponse {
  data: Array<{
    embedding: number[];
    index: number;
  }>;
  model: string;
  usage?: {
    prompt_tokens: number;
    total_tokens: number;
  };
}

function getProvider(): AIProvider {
  const provider = (process.env.AI_PROVIDER || 'openai').toLowerCase();
  if (provider === 'gemini') {
    return 'gemini';
  }
  return 'openai';
}

/**
 * Generate embedding vector for given text
 * @param text - Text to embed
 * @returns Array of numbers representing the embedding vector
 */
export async function embedText(text: string): Promise<number[]> {
  const provider = getProvider();

  // Clean and truncate text if needed
  const cleanText = text.trim().slice(0, 8000); // Most embedding models have token limits

  // Gemini path using official SDK
  if (provider === 'gemini') {
    const apiKey =
      process.env.GEMINI_API_KEY || process.env.AI_API_KEY || undefined;

    if (!apiKey) {
      throw new Error('GEMINI_API_KEY or AI_API_KEY must be set for Gemini');
    }

    const modelName = process.env.AI_EMBED_MODEL || 'text-embedding-004';

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });

      const result = await model.embedContent(cleanText);
      if (!result.embedding || !Array.isArray(result.embedding.values)) {
        throw new Error('Invalid Gemini embedding response format');
      }

      return result.embedding.values;
    } catch (error) {
      console.error('Error generating Gemini embedding:', error);
      throw error;
    }
  }

  // OpenAI-style provider via fetch
  const embedUrl = process.env.AI_EMBED_URL;
  const apiKey = process.env.AI_API_KEY;

  if (!embedUrl || !apiKey) {
    throw new Error(
      'AI_EMBED_URL and AI_API_KEY must be set in environment variables for OpenAI provider'
    );
  }

  // Clean and truncate text if needed
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    headers.Authorization = `Bearer ${apiKey}`;

    const body = {
      input: cleanText,
      model: process.env.AI_EMBED_MODEL || 'text-embedding-3-small',
    };

    const response = await fetch(embedUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Embedding API error: ${response.status} - ${errorText}`);
    }

    const json = await response.json();

    const o = json as OpenAIEmbeddingResponse;
    return o.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

/**
 * Generate embeddings for multiple texts in batch
 * @param texts - Array of texts to embed
 * @returns Array of embedding vectors
 */
export async function embedTextBatch(texts: string[]): Promise<number[][]> {
  const provider = getProvider();

  // Gemini path using SDK (sequential calls for now)
  if (provider === 'gemini') {
    const apiKey =
      process.env.GEMINI_API_KEY || process.env.AI_API_KEY || undefined;

    if (!apiKey) {
      throw new Error('GEMINI_API_KEY or AI_API_KEY must be set for Gemini');
    }

    // SDK currently focuses on single-content embed; use sequential calls for now
    const cleanTexts = texts.map((t) => t.trim().slice(0, 8000));
    const vectors: number[][] = [];
    for (const t of cleanTexts) {
      vectors.push(await embedText(t));
    }
    return vectors;
  }

  // OpenAI-style provider via fetch
  const embedUrl = process.env.AI_EMBED_URL;
  const apiKey = process.env.AI_API_KEY;

  if (!embedUrl || !apiKey) {
    throw new Error(
      'AI_EMBED_URL and AI_API_KEY must be set in environment variables for OpenAI provider'
    );
  }

  // Clean texts
  const cleanTexts = texts.map((text) => text.trim().slice(0, 8000));

  try {
    const results: number[][] = [];
    for (const t of cleanTexts) {
      results.push(await embedText(t));
    }
    return results;
  } catch (error) {
    console.error('Error generating embeddings:', error);
    throw error;
  }
}

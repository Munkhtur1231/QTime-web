/**
 * Offline Embedding Script
 * Generates and stores embeddings for all businesses
 * Run this script periodically or after adding new businesses
 */

import { PrismaClient } from '@businessdirectory/database';
import { embedText } from '../utils/embed-client';

const db = new PrismaClient();

/**
 * Business with relations for embedding
 * Using a more flexible type that matches Prisma's actual return type
 */
type BusinessWithRelations = {
  id: number;
  name: string;
  description?: string | null;
  summary?: string | null;
  category: {
    name: string;
    description?: string | null;
    parentCategory: {
      name: string;
    } | null;
  } | null;
  addresses: Array<{
    address: string;
  }>;
};

/**
 * Build text representation of a business for embedding
 */
function buildBusinessText(business: BusinessWithRelations): string {
  const parts: string[] = [];

  // Add business name
  if (business.name) {
    parts.push(business.name);
  }

  // Add description
  if (business.description) {
    parts.push(business.description);
  }

  // Add summary
  if (business.summary) {
    parts.push(business.summary);
  }

  // Add category information
  if (business.category) {
    parts.push(business.category.name);
    if (business.category.description) {
      parts.push(business.category.description);
    }
    // Add parent category
    if (business.category.parentCategory) {
      parts.push(business.category.parentCategory.name);
    }
  }

  // Add address information (city/district)
  if (business.addresses && business.addresses.length > 0) {
    business.addresses.forEach((addr) => {
      if (addr.address) {
        parts.push(addr.address);
      }
    });
  }

  return parts.join(' - ');
}

/**
 * Process businesses in batches
 */
async function embedBusinesses(batchSize = 200) {
  let processedCount = 0;
  let errorCount = 0;
  let hasMore = true;

  console.log('🚀 Starting business embedding process...');

  while (hasMore) {
    try {
      // Fetch businesses without embeddings
      // Note: Prisma doesn't support direct null checks on JSON fields well
      // We fetch all and filter in memory, or use raw query
      const allBusinesses = await db.business.findMany({
        take: batchSize * 2, // Get more to account for filtering
        include: {
          category: {
            include: {
              parentCategory: true,
            },
          },
          addresses: true,
        },
      });

      // Filter businesses without embeddings
      const businesses = allBusinesses
        .filter((b) => !b.embedding)
        .slice(0, batchSize);

      if (businesses.length === 0) {
        hasMore = false;
        console.log('✅ No more businesses to process');
        break;
      }

      console.log(
        `\n📦 Processing batch of ${businesses.length} businesses...`
      );

      // Process each business
      for (const business of businesses) {
        try {
          // Build text representation
          const text = buildBusinessText(business);

          if (!text.trim()) {
            console.warn(
              `⚠️  Business ${business.id} (${business.name}) has no text to embed, skipping...`
            );
            continue;
          }

          console.log(
            `  Processing: ${business.id} - ${business.name.substring(
              0,
              50
            )}...`
          );

          // Generate embedding
          const vector = await embedText(text);

          // Update business with embedding
          await db.business.update({
            where: { id: business.id },
            data: { embedding: vector },
          });

          processedCount++;

          // Add a small delay to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          errorCount++;
          console.error(
            `❌ Error processing business ${business.id} (${business.name}):`,
            error
          );
          // Continue with next business
        }
      }

      console.log(
        `✅ Batch complete. Processed: ${processedCount}, Errors: ${errorCount}`
      );
    } catch (error) {
      console.error('❌ Error fetching businesses:', error);
      hasMore = false;
    }
  }

  console.log('\n🎉 Embedding process complete!');
  console.log(`📊 Total processed: ${processedCount}`);
  console.log(`❌ Total errors: ${errorCount}`);
}

/**
 * Re-embed all businesses (useful for model updates)
 */
async function reEmbedAll(batchSize = 50) {
  let processedCount = 0;
  let errorCount = 0;
  let skip = 0;

  console.log('🔄 Re-embedding all businesses...');

  while (true) {
    try {
      const businesses = await db.business.findMany({
        skip,
        take: batchSize,
        include: {
          category: {
            include: {
              parentCategory: true,
            },
          },
          addresses: true,
        },
      });

      if (businesses.length === 0) {
        break;
      }

      console.log(
        `\n📦 Processing batch ${Math.floor(skip / batchSize) + 1} (${
          businesses.length
        } businesses)...`
      );

      for (const business of businesses) {
        try {
          const text = buildBusinessText(business);

          if (!text.trim()) {
            console.warn(
              `⚠️  Business ${business.id} (${business.name}) has no text to embed, skipping...`
            );
            continue;
          }

          console.log(
            `  Re-embedding: ${business.id} - ${business.name.substring(
              0,
              50
            )}...`
          );

          const vector = await embedText(text);

          await db.business.update({
            where: { id: business.id },
            data: { embedding: vector },
          });

          processedCount++;

          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          errorCount++;
          console.error(
            `❌ Error processing business ${business.id} (${business.name}):`,
            error
          );
        }
      }

      skip += batchSize;
    } catch (error) {
      console.error('❌ Error fetching businesses:', error);
      break;
    }
  }

  console.log('\n🎉 Re-embedding complete!');
  console.log(`📊 Total processed: ${processedCount}`);
  console.log(`❌ Total errors: ${errorCount}`);
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'embed';
  const batchSize = parseInt(args[1]) || 200;

  try {
    if (command === 'reembed') {
      await reEmbedAll(batchSize);
    } else {
      await embedBusinesses(batchSize);
    }
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

// Run if called directly
if (require.main === module) {
  main()
    .catch((error) => {
      console.error('❌ Unhandled error:', error);
      process.exit(1);
    })
    .finally(() => {
      db.$disconnect();
    });
}

export { embedBusinesses, reEmbedAll };

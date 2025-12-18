/**
 * One-time job processor - Manual execution
 */

import dotenv from 'dotenv';
dotenv.config();

import { jobQueue } from '../utils/job-queue';
import { processWelcomeEmail } from './email-worker';

async function processAllJobs() {
  console.log('🔄 Processing all pending jobs...');

  let processed = 0;
  let errors = 0;

  while (true) {
    try {
      const jobProcessed = await jobQueue.processJobs(async (job) => {
        console.log(`📋 Processing job: ${job.jobId} (${job.type})`);
        if (job.type === 'welcome_email') {
          const payload = job.payload as unknown as {
            userId: number;
            email: string;
            firstName: string;
            lastName: string;
          };
          return await processWelcomeEmail(payload);
        }
        return { success: false, error: `Unknown job type: ${job.type}` };
      });

      if (!jobProcessed) {
        console.log('✅ No more jobs to process');
        break;
      }

      processed++;
    } catch (error) {
      console.error('❌ Error processing job:', error);
      errors++;
    }
  }

  console.log(`🎉 Processing complete! Processed: ${processed}, Errors: ${errors}`);

  // Check queue stats
  const stats = await jobQueue.getStats();
  console.log('📊 Queue stats:', stats);
}

processAllJobs().catch(console.error).finally(() => process.exit(0));

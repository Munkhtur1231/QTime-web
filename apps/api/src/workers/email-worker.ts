/**
 * Email Worker - Processes email jobs from queue
 * Run this alongside your main API server
 */

import dotenv from 'dotenv';
dotenv.config();

import { jobQueue } from '../utils/job-queue';
import { emailService } from '../utils/email';
import {
  fillWelcomeTemplate,
  generateRecommendedBusinessesHTML,
} from '../helpers/email-templates';
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from '../helpers/prompts';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '../utils/prisma';
import { logger } from '../utils/logger';

interface WelcomeEmailPayload {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
}

async function processWelcomeEmail(
  payload: WelcomeEmailPayload
): Promise<{ success: boolean; error?: string }> {
  logger.info(
    `Processing welcome email for user ${payload.userId} (${payload.email})`
  );

  try {
    // Check if user still exists
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, email: true, firstName: true, lastName: true },
    });

    if (!user) {
      logger.warn(`User ${payload.userId} not found`);
      return { success: false, error: 'User not found' };
    }

    // Generate personalized intro using AI
    const userProfile = `${payload.firstName} ${payload.lastName || ''}`.trim();
    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      '{{userProfile}}',
      userProfile
    );

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not configured');
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const result = await model.generateContent(prompt);
    const intro = result.response.text();

    // Get recommended businesses (simplified - get 5 random active businesses)
    const recommendedBusinesses = await prisma.business.findMany({
      where: { isActive: true },
      take: 5,
      select: {
        id: true,
        name: true,
        category: { select: { name: true } },
        addresses: { select: { address: true }, take: 1 },
      },
    });

    // Format businesses for email
    const formattedBusinesses = recommendedBusinesses.map((b) => ({
      name: b.name,
      category: b.category.name,
      address: b.addresses[0]?.address.split(',')[0]?.trim() || 'Unknown',
    }));

    const businessesHTML =
      generateRecommendedBusinessesHTML(formattedBusinesses);
    const htmlContent = fillWelcomeTemplate(
      payload.firstName,
      intro,
      businessesHTML
    );

    logger.info(
      `Generated email content for ${
        payload.email
      }, email service configured: ${emailService.isConfigured()}`
    );

    // Send email
    const emailSent = await emailService.send({
      to: payload.email,
      subject: `Тавтай морил, ${payload.firstName}! - Yellow Books`,
      html: htmlContent,
    });

    if (!emailSent) {
      logger.error(
        `Failed to send welcome email to ${payload.email} - email service not configured`
      );
      return {
        success: false,
        error: 'Email service failed - check SMTP configuration',
      };
    }

    logger.info(`Welcome email sent successfully to ${payload.email}`);
    return { success: true };
  } catch (error) {
    logger.error('Welcome email processing failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

interface Job {
  jobId: string;
  type: string;
  payload: Record<string, unknown>;
  createdAt: Date;
  retryCount?: number;
}

async function processJob(
  job: Job
): Promise<{ success: boolean; error?: string }> {
  logger.info(`Processing job: ${job.jobId} (${job.type})`);

  switch (job.type) {
    case 'welcome_email': {
      const payload = job.payload as unknown as WelcomeEmailPayload;
      return await processWelcomeEmail(payload);
    }
    default:
      return { success: false, error: `Unknown job type: ${job.type}` };
  }
}

// Worker loop
async function runWorker() {
  console.log('🚀 Email Worker Started - Testing Redis connection...');

  // Test Redis connection first
  try {
    const stats = await jobQueue.getStats();
    console.log('📊 Redis connected. Queue stats:', stats);
  } catch (error) {
    console.error('❌ Redis connection failed:', error);
    console.log('🔧 Check your Redis configuration in .env');
    process.exit(1);
  }

  let cycle = 0;
  console.log('🔄 Starting job polling loop...');

  while (true) {
    cycle++;
    console.log(`🔍 Cycle ${cycle}: Checking for jobs...`);

    try {
      const processed = await jobQueue.processJobs(processJob);
      if (processed) {
        console.log('✅ Processed 1 job');
      } else {
        console.log('📭 No jobs in queue');
      }
    } catch (error) {
      console.error('❌ Worker processing error:', error);
    }

    // Poll every 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

// Manual job creation for testing
async function createTestJob() {
  const jobId = await jobQueue.enqueue(
    'welcome_email',
    {
      userId: 40,
      email: 'radnaa2024@gmail.com',
      firstName: 'John',
      lastName: 'Doe',
    },
    'test_welcome_email'
  );
  console.log(`Created test job: ${jobId}`);
}

// Run worker when script is executed directly
if (require.main === module) {
  const command = process.argv[2];

  if (command === 'test') {
    console.log('Creating test job...');
    createTestJob().catch(console.error);
  } else {
    console.log('🚀 Starting Email Worker...');
    runWorker().catch((error) => {
      console.error('❌ Worker failed to start:', error);
      process.exit(1);
    });
  }
}

export { processWelcomeEmail };

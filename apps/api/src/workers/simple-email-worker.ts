/**
 * Simple Email Worker
 * Automatically processes welcome email jobs
 */

import { jobQueue } from '../utils/simple-queue';
import { prisma } from '../utils/prisma';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { emailService } from '../utils/email';
import {
  WELCOME_EMAIL_TEMPLATE,
  generateRecommendedBusinessesHTML,
} from '../helpers/email-templates';
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from '../helpers/prompts';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Welcome email job payload
 */
interface WelcomeEmailPayload {
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * Job with typed payload
 */
interface WelcomeEmailJob {
  id: string;
  type: string;
  payload: WelcomeEmailPayload;
  createdAt: Date;
}

/**
 * Process welcome email job
 */
async function processWelcomeEmail(job: WelcomeEmailJob) {
  const { email, firstName, lastName } = job.payload;

  try {
    console.log(`📧 Sending welcome email to ${email}...`);

    // 1. Generate personalized intro using AI
    const model = genAI.getGenerativeModel({
      model: process.env.AI_CHAT_MODEL || 'gemini-2.0-flash-exp',
    });

    const fullName = `${firstName} ${lastName}`.trim();
    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      /{{userName}}/g,
      fullName
    );

    let personalizedIntro = `Сайн байна уу ${firstName},\n\n Манай Yellow Books платформд тавтай морил!`;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      personalizedIntro = response.text();
    } catch (aiError) {
      console.warn('AI generation failed, using default intro:', aiError);
    }

    // 2. Get 5 random businesses to recommend
    const businesses = await prisma.business.findMany({
      where: { isActive: true },
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        addresses: true,
        category: true,
      },
    });

    const recommendedBusinessesHTML = generateRecommendedBusinessesHTML(
      businesses.map((b) => ({
        name: b.name,
        category: b.category.name,
        address: b.addresses[0]?.address || 'Хаяг байхгүй',
      }))
    );

    // 3. Fill template
    const displayName = firstName || 'Хэрэглэгч';
    const introHTML = `<p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
      ${personalizedIntro.replace(/\n/g, '<br>')}
    </p>`;

    const emailHTML = WELCOME_EMAIL_TEMPLATE.replace('{{name}}', displayName)
      .replace('{{intro}}', introHTML)
      .replace('{{recommendedBusinesses}}', recommendedBusinessesHTML);

    // 4. Send email
    const sent = await emailService.send({
      to: email,
      subject: 'Тавтай морил! 🎉',
      html: emailHTML,
    });

    if (!sent) {
      console.warn('⚠️  Email not sent (SMTP not configured)');
      return { success: true, message: 'Skipped (no SMTP)' };
    }

    console.log(`✅ Welcome email sent to ${email}`);
    return { success: true, message: 'Email sent' };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`❌ Failed to send welcome email:`, errorMessage);
    return { success: false, message: errorMessage };
  }
}

/**
 * Job handler
 */
async function handleJob(job: { id: string; type: string; payload: Record<string, unknown>; createdAt: Date }) {
  if (job.type === 'welcome_email') {
    const payload = job.payload as unknown as WelcomeEmailPayload;
    return await processWelcomeEmail({
      id: job.id,
      type: job.type,
      payload,
      createdAt: job.createdAt,
    });
  }

  return { success: false, message: 'Unknown job type' };
}

/**
 * Start the email worker
 * Call this from your main API server
 */
export function startEmailWorker() {
  console.log('🚀 Email Worker Started');
  jobQueue.startAutoProcessing(handleJob);
}

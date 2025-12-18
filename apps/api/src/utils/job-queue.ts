/**
 * Simple Redis-based Job Queue
 * Minimal implementation for background jobs
 */

import { cacheService } from './redis';
import { logger } from './logger';

interface Job {
  jobId: string;
  type: string;
  payload: Record<string, unknown>;
  createdAt: Date;
  retryCount?: number;
}

interface JobResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

class JobQueue {
  private queueKey = 'jobs:queue';
  private processingKey = 'jobs:processing';
  private dlqKey = 'jobs:dlq';

  /**
   * Enqueue a job
   */
  async enqueue(
    jobType: string,
    payload: Record<string, unknown>,
    jobId?: string
  ): Promise<string> {
    const job: Job = {
      jobId:
        jobId ||
        `${jobType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: jobType,
      payload,
      createdAt: new Date(),
      retryCount: 0,
    };

    const success = await cacheService.set(`job:${job.jobId}`, job, 86400); // 24h TTL
    if (success) {
      await cacheService.getRedisClient()?.rpush(this.queueKey, job.jobId);
      logger.info(`Job enqueued: ${job.jobId} (${jobType})`);
    }

    return job.jobId;
  }

  /**
   * Dequeue a job
   */
  async dequeue(): Promise<Job | null> {
    const client = cacheService.getRedisClient();
    if (!client) return null;

    const jobId = await client.lpop(this.queueKey);
    if (!jobId) return null;

    const job = await cacheService.get<Job>(`job:${jobId}`);
    if (!job) return null;

    // Move to processing
    await client.sadd(this.processingKey, jobId);
    return job;
  }

  /**
   * Complete a job
   */
  async complete(jobId: string): Promise<void> {
    const client = cacheService.getRedisClient();
    if (!client) return;

    await client.srem(this.processingKey, jobId);
    await cacheService.delete(`job:${jobId}`);
    logger.info(`Job completed: ${jobId}`);
  }

  /**
   * Fail a job with retry logic
   */
  async fail(
    jobId: string,
    error: string,
    maxRetries = 5
  ): Promise<void> {
    const client = cacheService.getRedisClient();
    if (!client) return;

    const job = await cacheService.get<Job>(`job:${jobId}`);
    if (!job) return;

    job.retryCount = (job.retryCount || 0) + 1;

    if (job.retryCount >= maxRetries) {
      // Move to DLQ
      await client.srem(this.processingKey, jobId);
      await client.rpush(this.dlqKey, jobId);
      await cacheService.set(
        `job:${jobId}`,
        { ...job, error, dlqAt: new Date() },
        604800
      ); // 7 days
      logger.error(`Job moved to DLQ: ${jobId} - ${error}`);
    } else {
      // Re-queue with delay (exponential backoff)
      const delay = Math.min(5000 * Math.pow(2, job.retryCount - 1), 7200000); // Max 2h
      await client.srem(this.processingKey, jobId);
      await cacheService.set(`job:${jobId}`, job, 86400);

      // Re-queue after delay (simplified - in production use proper scheduler)
      setTimeout(async () => {
        await client.rpush(this.queueKey, jobId);
      }, delay);

      logger.warn(
        `Job re-queued: ${jobId} (attempt ${job.retryCount}/${maxRetries})`
      );
    }
  }

  /**
   * Get queue stats
   */
  async getStats(): Promise<{
    pending: number;
    processing: number;
    dlq: number;
  }> {
    const client = cacheService.getRedisClient();
    if (!client) return { pending: 0, processing: 0, dlq: 0 };

    const [pending, processing, dlq] = await Promise.all([
      client.llen(this.queueKey),
      client.scard(this.processingKey),
      client.llen(this.dlqKey),
    ]);

    return { pending, processing, dlq };
  }

  /**
   * Process jobs with handler function
   */
  async processJobs(
    handler: (job: Job) => Promise<JobResult>
  ): Promise<boolean> {
    const job = await this.dequeue();
    if (!job) return false;

    try {
      const result = await handler(job);
      if (result.success) {
        await this.complete(job.jobId);
      } else {
        await this.fail(job.jobId, result.error || 'Handler returned failure');
      }
    } catch (error) {
      await this.fail(
        job.jobId,
        error instanceof Error ? error.message : 'Unknown error'
      );
    }

    return true;
  }
}

export const jobQueue = new JobQueue();

/**
 * Simple In-Memory Job Queue (No Redis needed)
 * Perfect for university assignments and small projects
 */

interface Job {
  id: string;
  type: string;
  payload: Record<string, unknown>;
  createdAt: Date;
}

class SimpleJobQueue {
  private queue: Job[] = [];
  private processing = false;

  /**
   * Add a job to the queue
   */
  enqueue(type: string, payload: Record<string, unknown>): string {
    const job: Job = {
      id: `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      payload,
      createdAt: new Date(),
    };

    this.queue.push(job);
    console.log(`📨 Job added: ${job.id}`);
    return job.id;
  }

  /**
   * Process jobs with a handler function
   */
  async processJobs(
    handler: (job: Job) => Promise<{ success: boolean; message?: string }>
  ): Promise<number> {
    if (this.processing || this.queue.length === 0) {
      return 0;
    }

    this.processing = true;
    let processed = 0;

    while (this.queue.length > 0) {
      const job = this.queue.shift();
      if (!job) break;

      try {
        console.log(`⚙️  Processing: ${job.id}`);
        const result = await handler(job);

        if (result.success) {
          console.log(`✅ Success: ${job.id} - ${result.message || 'Done'}`);
          processed++;
        } else {
          console.log(`❌ Failed: ${job.id} - ${result.message || 'Unknown error'}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`❌ Error processing ${job.id}:`, errorMessage);
      }
    }

    this.processing = false;
    return processed;
  }

  /**
   * Get queue statistics
   */
  getStats() {
    return {
      pending: this.queue.length,
      processing: this.processing,
    };
  }

  /**
   * Start automatic processing (runs every 5 seconds)
   */
  startAutoProcessing(
    handler: (job: Job) => Promise<{ success: boolean; message?: string }>
  ) {
    console.log('🚀 Auto-processing started (checking every 5 seconds)');

    setInterval(async () => {
      if (this.queue.length > 0) {
        await this.processJobs(handler);
      }
    }, 5000); // Check every 5 seconds
  }
}

// Export singleton instance
export const jobQueue = new SimpleJobQueue();



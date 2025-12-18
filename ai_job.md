# AI Background Jobs Design

## Personalized Welcome Email Job

### Trigger

- User registration completion
- Fired from `user.service.ts` `create()` method after successful user creation

### Outcome

- Personalized welcome email with:
  - User greeting
  - 5 relevant businesses based on user's interests (if available)
  - Platform features introduction
- Sent to user's email address

### Why Async

- Email generation requires AI calls (embeddings + chat completion)
- User registration should be fast (<200ms)
- Email sending is non-critical for user flow
- Allows retry on failures

### Retry & Backoff

- Exponential backoff: 5s → 30s → 5min → 30min → 2h
- Max 5 retries
- Permanent failure after 5 attempts

### Idempotency

- Job ID includes user ID: `welcome_email_${userId}`
- Check if user already has welcome email sent flag
- Skip if duplicate job detected

### DLQ Handling

- Failed jobs go to Redis DLQ: `jobs:dlq`
- Manual review for:
  - Invalid user data
  - AI API failures
  - Email service outages
- Re-queue manually after fixing root cause

## Daily News Email Job (Future)

### Trigger

- Cron schedule: daily at 8 AM Ulaanbaatar time
- User preference check (news subscription enabled)

### Payload

```json
{
  "jobId": "daily_news_20241214",
  "targetUsers": [123, 456, 789],
  "newsDate": "2024-12-14"
}
```

import { Redis } from '@upstash/redis';

// See documentation at
// https://docs.upstash.com/redis/sdks/javascriptsdk/getstarted#basic-usage
const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

// NOTE: use your full_name as a key prefix when writing to Redis, to avoid collisions.

export default redis;

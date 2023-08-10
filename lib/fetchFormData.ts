import redis from './db';

export default async function fetchFormData() {
  try {
    const data = await redis.get('form-data');
    if (data) {
      return data;
    } else {
      throw new Error('Data not found');
    }
  } catch (e) {
    console.error('Error fetching form data from Redis:', e);
    throw e;
  }
}

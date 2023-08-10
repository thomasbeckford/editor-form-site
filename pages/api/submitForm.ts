import { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../lib/db';

export default async function submitForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      await redis.set('form-data', formData);

      res.status(200).json({ message: 'Data submitted successfully' });
    } catch (e) {
      res.status(500).json({ message: 'Error submitting form data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

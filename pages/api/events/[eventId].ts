import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteEventById } from '../../../database/events';
import { Data } from '../../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'DELETE') {
    // Process a DELETE request
    const { id } = req.body.event;
    const deletedEvent = await deleteEventById(id);

    if (!deletedEvent) {
      res
        .status(500)
        .json({ error: 'Something went wrong. Try again, please.' });
    }

    res.status(200).json({ message: 'The event was deleted' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

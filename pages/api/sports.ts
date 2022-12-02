import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllSports } from '../../database/sports';
import { Data } from '../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    // Process a GET request
    const allSports = await getAllSports();

    if (allSports.length === 0) {
      res.status(404).json({ error: 'There are no sports' });
    }

    res.status(200).json({ sports: allSports });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

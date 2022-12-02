import type { NextApiRequest, NextApiResponse } from 'next';
import { getTeamsBySportId } from '../../database/teams';
import { Data } from '../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // get all teams based on the sport id
  if (req.method === 'GET') {
    const { id } = req.query;
    const teams = await getTeamsBySportId(Number(id));
    if (teams.length === 0) {
      res.status(404).json({ error: 'There are no teams' });
    }
    res.status(200).json({ teams: teams });
  }

  // if the method is not GET, return an error
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

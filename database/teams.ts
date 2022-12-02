import { Team } from '../utils/types';
import { sql } from './connect';

export async function getTeamsBySportId(id: number) {
  const teams = await sql<Team[]>`
    SELECT * FROM teams
    WHERE _sport_id = ${id}
    ORDER BY name ASC;
  `;
  return teams;
}

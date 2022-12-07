import { Sport } from '../utils/types';
import { sql } from './connect';

export async function getAllSports() {
  const allSports = await sql<Sport[]>`
    SELECT * FROM sports;
  `;
  return allSports;
}

// get sport id by name
// used for unit testing
export async function getSportByName(name: string) {
  const [sport] = await sql<Sport[]>`
    SELECT id FROM sports
    WHERE name = ${name}

  `;
  return sport;
}

// get sport by id is used in the unit testing
export async function getSportById(id: number) {
  const [sport] = await sql<Sport[]>`
    SELECT * FROM sports
    WHERE id = ${id}
  `;
  return sport;
}

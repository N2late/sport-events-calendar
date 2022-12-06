import { Event } from '../utils/types';
import { sql } from './connect';

export async function createEvent(
  date: string,
  time: string,
  _sport_id: number,
  _home_team_id: number,
  _away_team_id: number,
) {
  const [newEvent] = await sql<Event[]>`
    INSERT INTO events
      (date, time, _sport_id, _home_team_id, _away_team_id)
    VALUES
      (${date}, ${time}, ${_sport_id}, ${_home_team_id}, ${_away_team_id})
    RETURNING *;
  `;
  const event = await getEventById(newEvent.id);
  return event;
}

// get all events with sport and teams and sort them by date and time in ascending order
export async function getAllEvents() {
  const allEvents = await sql<Event[]>`
    SELECT
      events.id,
      events.date,
      events.time,
      sports.name AS sport_name,
      home_team.name AS home_team,
      away_team.name AS away_team
    FROM events
    INNER JOIN sports ON events._sport_id = sports.id
    INNER JOIN teams AS home_team ON events._home_team_id = home_team.id
    INNER JOIN teams AS away_team ON events._away_team_id = away_team.id
    ORDER BY events.date ASC, events.time ASC
  `;
  return allEvents;
}

export async function getEventsBySportId(sport_id: number) {
  const events = await sql<Event[]>`
    SELECT
      events.id,
      events.date,
      events.time,
      sports.name AS sport,
      home_team.name AS home_team,
      away_team.name AS away_team FROM events
    INNER JOIN sports ON events._sport_id = sports.id
    INNER JOIN teams AS home_team ON events._home_team_id = home_team.id
    INNER JOIN teams AS away_team ON events._away_team_id = away_team.id
    WHERE events._sport_id = ${sport_id}
    ORDER BY events.date ASC, events.time ASC
  `;
  return events;
}

export async function deleteEventById(id: number) {
  const [event] = await sql<Event[]>`
    DELETE FROM events
    WHERE id = ${id}
  `;
  return event;
}

export async function deleteAllEvents() {
  const event = await sql<Event[]>`
    DELETE FROM events
  `;
  return event;
}

export async function getEventById(id: number) {
  const [event] = await sql<Event[]>`
    SELECT
      events.id,
      events.date,
      events.time,
      sports.name AS sport_name,
      home_team.name AS home_team,
      away_team.name AS away_team
    FROM events
    INNER JOIN sports ON events._sport_id = sports.id
    INNER JOIN teams AS home_team ON events._home_team_id = home_team.id
    INNER JOIN teams AS away_team ON events._away_team_id = away_team.id
    WHERE events.id = ${id}
  `;
  return event;
}

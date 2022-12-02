/**
 * @jest-environment node
 */

import { sql } from '../../database/connect';
import {
  createEvent,
  deleteAllEvents,
  getAllEvents,
  getEventsBySportId,
} from '../../database/events';
import { getSportById, getSportByName } from '../../database/sports';
import { getTeamsBySportId } from '../../database/teams';

describe('Database', () => {
  it('should create three events', async () => {
    const newEvent1 = await createEvent('2022-12-24', '20:00', 1, 3, 4);

    const newEvent2 = await createEvent('2023-01-01', '20:00', 1, 5, 6);

    const newEvent3 = await createEvent('2022-12-31', '20:00', 2, 7, 8);

    expect(newEvent1).toEqual({
      id: expect.any(Number),
      date: expect.any(Date),
      time: '20:00:00',
      _sportId: 1,
      _homeTeamId: 3,
      _awayTeamId: 4,
    });

    expect(newEvent2).toEqual({
      id: expect.any(Number),
      date: expect.any(Date),
      time: '20:00:00',
      _sportId: 1,
      _homeTeamId: 5,
      _awayTeamId: 6,
    });

    expect(newEvent3).toEqual({
      id: expect.any(Number),
      date: expect.any(Date),
      time: '20:00:00',
      _sportId: 2,
      _homeTeamId: 7,
      _awayTeamId: 8,
    });
  });

  it('should get all events order by date ascending', async () => {
    const allEvents = await getAllEvents();

    expect(allEvents[0].date.toString()).toContain('Dec 24 2022');
    expect(allEvents[1].date.toString()).toContain('Dec 31 2022');
    expect(allEvents[2].date.toString()).toContain('Jan 01 2023');

    expect(allEvents).toEqual([
      {
        id: expect.any(Number),
        date: expect.any(Date),
        time: expect.any(String),
        sport: expect.any(String),
        homeTeam: expect.any(String),
        awayTeam: expect.any(String),
      },
      {
        id: expect.any(Number),
        date: expect.any(Date),
        time: expect.any(String),
        sport: expect.any(String),
        homeTeam: expect.any(String),
        awayTeam: expect.any(String),
      },
      {
        id: expect.any(Number),
        date: expect.any(Date),
        time: expect.any(String),
        sport: expect.any(String),
        homeTeam: expect.any(String),
        awayTeam: expect.any(String),
      },
    ]);
  });

  it('should get events by sport id', async () => {
    const sportName = 'Football';
    const sportObj = await getSportByName(sportName);
    const events = await getEventsBySportId(sportObj.id);

    expect(events).toEqual([
      {
        id: expect.any(Number),
        date: expect.any(Date),
        time: expect.any(String),
        sport: expect.stringMatching(sportName),
        homeTeam: expect.any(String),
        awayTeam: expect.any(String),
      },
      {
        id: expect.any(Number),
        date: expect.any(Date),
        time: expect.any(String),
        sport: expect.stringMatching(sportName),
        homeTeam: expect.any(String),
        awayTeam: expect.any(String),
      },
    ]);
  });

  it('should get teams by sport id', async () => {
    const sportName = 'Football';
    const sportObj = await getSportByName(sportName);
    const teams = await getTeamsBySportId(sportObj.id);

    teams.forEach((team) => {
      expect(team).toEqual({
        id: expect.any(Number),
        name: expect.any(String),
        _sportId: sportObj.id,
      });
    });
  });

  it('should delete all events', async () => {
    const event = await deleteAllEvents();

    expect(event).toEqual([]);
    // close connection to the database
    await sql.end();
  });
});

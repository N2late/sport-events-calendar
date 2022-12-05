import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createEvent,
  deleteAllEvents,
  getAllEvents,
} from '../../../database/events';
import { Data } from '../../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    // Process a POST request
    const { date, time, sportId, homeTeamId, awayTeamId } = req.body.eventData;

    /* Checking if the required fields are filled out. */
    switch (true) {
      case !date:
        res.status(400).json({ error: 'Date is required' });
        break;
      case !time:
        res.status(400).json({ error: 'Time is required' });
        break;
      case !sportId:
        res.status(400).json({ error: 'Sport is required' });
        break;
      case !homeTeamId:
        res.status(400).json({ error: 'Home team is required' });
        break;
      case !awayTeamId:
        res.status(400).json({ error: 'Away team is required' });
        break;
    }

    /* Creating a new event. */
    const newEvent = await createEvent(
      date,
      time,
      sportId,
      homeTeamId,
      awayTeamId,
    );

    /* Checking if the event was created. */
    if (!newEvent) {
      res
        .status(500)
        .json({ error: 'Something went wrong. Try again, please.' });
    }
    console.log('here', newEvent);
    /* Sending the new event back to the client. */
    res.status(200).json({ event: newEvent });
  }
  if (req.method === 'GET') {
    // Process a GET request
    const allEvents = await getAllEvents();

    if (allEvents.length === 0) {
      res.status(404).json({ error: 'No events found' });
    }

    res.status(200).json({ events: allEvents });
  }

  if (req.method === 'DELETE') {
    // Process a DELETE request
    const allDeletedEvents = await deleteAllEvents();

    if (!allDeletedEvents) {
      res.status(400).json({ error: 'No events to delete' });
    } else {
      res.status(200).json({ message: 'All events were deleted' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request' });
  }
}

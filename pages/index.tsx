import Head from 'next/head';
import { useState } from 'react';
import AddEvent from '../components/AddEvent/AddEvent';
import EventsList from '../components/EventsList';
import { getAllEvents } from '../database/events';
import { getAllSports } from '../database/sports';
import { homeStyles } from '../styles/home';
import { Event, Sport } from '../utils/types';

type Props = {
  events: Event[];
  sports: Sport[];
};

export default function Home({ events, sports }: Props) {
  const [eventList, setEventList] = useState<Event[]>(events);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventList);
  const [filterSport, setFilterSport] = useState('All');
  /**
   * It takes an event, adds it to the event list, sorts the event list by date and time, filters the
   * event list by the filter, and sets the filtered events to the event list
   * @param {Event} event - Event - this is the event that is being added to the list
   */
  const updateEventList = (event: Event) => {
    const newEventList = [...eventList, event];
    newEventList.sort(
      (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time),
    );
    setEventList(
      newEventList.filter((event) =>
        event.sportName?.toLocaleLowerCase().includes(filterSport),
      ),
    );
    setFilteredEvents(newEventList);
  };

  // It takes an change event, sets the sport filter state, filter eventList based on it, and sets the filtered events to the filteredEvents state
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.currentTarget.value;
    setFilterSport(newFilter);
    if (newFilter === 'all') {
      return setFilteredEvents(eventList);
    } else {
      return setFilteredEvents(
        eventList.filter((event) =>
          event.sportName?.toLowerCase().includes(newFilter.toLowerCase()),
        ),
      );
    }
  };

  return (
    <div>
      <Head>
        <title>SportCal: sports events</title>
        <meta
          name="description"
          content="At SportCal you can find all the sports events and add new ones"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={homeStyles.main}>
        <div css={homeStyles.addEventContainer}>
          <AddEvent updateEventList={updateEventList} />
        </div>
        <div css={homeStyles.eventsListContainer}>
          <EventsList
            events={filteredEvents}
            sports={sports}
            handleFilter={handleFilter}
          />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const events = await getAllEvents();
  const sports = await getAllSports();

  if (!events) {
    return {
      props: {
        events: [],
        sports: [],
      },
    };
  }
  return {
    props: {
      events: JSON.parse(JSON.stringify(events)),
      sports,
    },
  };
}

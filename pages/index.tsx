import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AddEvent from '../components/AddEvent/AddEvent';
import EventsList from '../components/EventsList';
import { homeStyles } from '../styles/home';

export default function Home() {
  const [eventList, setEventList] = useState<Event[]>([]);

  const updateEventList = (event: Event) => {
    setEventList((prevState) => [...prevState, event]);
  };

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((events) => setEventList(events.events));
  }, []);

  console.log(eventList);

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
          <AddEvent setEventList={setEventList} />
        </div>
        <div css={homeStyles.eventsListContainer}>
          <EventsList events={eventList} />
        </div>
      </main>
    </div>
  );
}

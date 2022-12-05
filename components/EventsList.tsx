import Image from 'next/image';
import { eventsListStyles } from '../styles/eventsList';
import { Event } from '../utils/types';

type Props = {
  events: Event[];
};

function EventsList({ events }: Props) {
  return (
    <div css={eventsListStyles.container}>
      <div css={eventsListStyles.title}>
        <Image
          src="/icon-events.png"
          width={50}
          height={50}
          alt="sport events icon"
        />{' '}
        <h2>Sports Events</h2>
      </div>
      <div css={eventsListStyles.innerContainer}>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

type EventItemProps = {
  key: number;
  event: Event;
};

function EventItem({ key, event }: EventItemProps) {
  console.log(event);
  return (
    <div css={eventsListStyles.event}>
      <div css={eventsListStyles.eventInfo}>
        <h3>{event.sportName}</h3>
        <p>{event.time}</p>
      </div>
    </div>
  );
}

export default EventsList;

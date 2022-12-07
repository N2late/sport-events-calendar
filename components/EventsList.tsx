import Image from 'next/image';
import { eventsListStyles } from '../styles/eventsList';
import { Event, Sport } from '../utils/types';

type Props = {
  events: Event[];
  sports: Sport[];
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function EventsList({ events, sports, handleFilter }: Props) {
  return (
    <div css={eventsListStyles.container}>
      <div css={eventsListStyles.titleContainer}>
        <div css={eventsListStyles.title}>
          <Image
            src="/icon-events.png"
            width={50}
            height={50}
            alt="sport events icon"
          />{' '}
          <h2>Sports Events</h2>
        </div>
        <div css={eventsListStyles.filterEvents}>
          <label htmlFor="filter">Filter by sport:</label>
          <select name="filter" id="filter" onChange={handleFilter}>
            <option value="all">All</option>
            {sports.map((sport) => (
              <option key={sport.id} value={sport.name}>
                {sport.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div css={eventsListStyles.innerContainer}>
        {!events.length && (
          <div css={eventsListStyles.noEvents}>
            <h3>No events yet</h3>
          </div>
        )}
        {events &&
          events.map((event) => <EventItem key={event.id} event={event} />)}
      </div>
    </div>
  );
}

type EventItemProps = {
  event: Event;
};

function EventItem({ event }: EventItemProps) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const date = new Date(event.date).toLocaleDateString('en-GB', options);

  return (
    <div css={eventsListStyles.event} data-test-id={`event-${event.id}`}>
      <p css={eventsListStyles.teamName}>{event.homeTeam}</p>
      <div css={eventsListStyles.eventInfo}>
        <p>{event.sportName}</p>
        <p>{date}</p>
        <p>{event.time.slice(0, 5)}</p>
      </div>
      <p css={eventsListStyles.teamName}>{event.awayTeam}</p>
    </div>
  );
}

export default EventsList;

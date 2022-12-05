import { FormEventData } from '../../utils/types';
import FormWrapper from './FormWrapper';

type EventDateTimeData = {
  date: string;
  time: string;
};

type EventDateTimeProps = EventDateTimeData & {
  updateFields: (fields: Partial<FormEventData>) => void;
};

export function EventDateTime({
  date,
  time,
  updateFields,
}: EventDateTimeProps) {
  let currDate = new Date();
  /* Getting the timezone offset in minutes. */
  const offset = currDate.getTimezoneOffset();
  /* Converting the date to UTC. */
  currDate = new Date(currDate.getTime() - offset * 60 * 1000);
  const currDateStr = currDate.toISOString().split('T')[0];

  /* Getting the current time and converting it to UTC. */
  let currTime = new Date();
  currTime = new Date(currTime.getTime() - offset * 60 * 1000);
  const currTimeStr = currTime
    .toISOString()
    .split('T')[1]
    .split('.')[0]
    .slice(0, 5);

  return (
    <FormWrapper title="Event Date and Time">
      <label htmlFor="date">Date</label>
      <input
        autoFocus
        required
        type="date"
        min={currDateStr}
        id="date"
        value={date}
        onChange={(e) => updateFields({ date: e.currentTarget.value })}
      />
      <label htmlFor="time">Time</label>
      <input
        required
        type="time"
        min={date === currDateStr ? currTimeStr : '00:00'}
        id="time"
        value={time}
        onChange={(e) => updateFields({ time: e.currentTarget.value })}
      />
    </FormWrapper>
  );
}

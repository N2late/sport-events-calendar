import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { addEventStyles } from '../../styles/addEvent';
import { FormEventData } from '../../utils/types';
import { useMultiStepForm } from '../../utils/useMultistepForm';
import { EventDateTime } from './EventDateTime';
import SelectTeams from './SelectTeams';
import SportPick from './SportPick';

type AddEventProps = {
  setEventList: (events: Event[]) => void;
};

const initialFormState: FormEventData = {
  date: '',
  time: '',
  sportId: 0,
  homeTeamId: 0,
  awayTeamId: 0,
};

function AddEvent({ setEventList }: AddEventProps) {
  const [formState, setFormState] = useState(initialFormState);

  /**
   * It takes an object of type Partial<FormEventData> and returns a new object of type FormEventData that will update the formState.
   * @param fields - Partial<FormEventData>
   */
  function updateFields(fields: Partial<FormEventData>) {
    setFormState((prevState) => ({ ...prevState, ...fields }));
  }

  const {
    isFirstStep,
    nextStep,
    prevStep,
    isLastStep,
    currentStep,
    setCurrentStepIndex,
  } = useMultiStepForm([
    <EventDateTime {...formState} updateFields={updateFields} />,
    <SportPick sportId={formState.sportId} updateFields={updateFields} />,
    <SelectTeams {...formState} updateFields={updateFields} />,
  ]);
  const [addEvent, setAddEvent] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return nextStep();
    console.log(formState);
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventData: formState }),
    });
    const event = await res.json();
    if (res.ok) {
      alert('Successful Event Creation');
      setAddEvent(false);
      setFormState(initialFormState);
      setCurrentStepIndex(0);
    } else {
      alert('Event Creation Failed');
      setFormState(initialFormState);
      setCurrentStepIndex(0);
    }
  }

  return (
    <div css={addEventStyles.container}>
      {!addEvent ? (
        <button css={addEventStyles.btn} onClick={() => setAddEvent(true)}>
          <Image
            src="/calendar_icon.png"
            alt="add event"
            width={50}
            height={50}
          />
          Add Event
        </button>
      ) : (
        <div css={addEventStyles.formContainer}>
          <form onSubmit={onSubmit}>
            {currentStep}
            <div css={addEventStyles.btnContainer}>
              <button
                type="button"
                onClick={() => {
                  setAddEvent(false);
                  setFormState(initialFormState);
                  setCurrentStepIndex(0);
                }}
              >
                Cancel
              </button>
              {!isFirstStep && (
                <button type="button" onClick={prevStep}>
                  Back
                </button>
              )}
              <button>{isLastStep ? 'Submit' : 'Next'}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddEvent;

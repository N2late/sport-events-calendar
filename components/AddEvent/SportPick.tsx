import { useEffect, useState } from 'react';
import { FormEventData, Sport } from '../../utils/types';
import FormWrapper from './FormWrapper';

type SportPickProps = {
  sportId: number;
  updateFields: (fields: Partial<FormEventData>) => void;
};

function SportPick({ sportId, updateFields }: SportPickProps) {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    fetch('/api/sports')
      .then((res) => res.json())
      .then((sports) => setSports(sports.sports));
  }, []);

  return (
    <FormWrapper title="Pick a Sport">
      <label htmlFor="sport">Sport</label>
      <select
        required
        id="sport"
        value={sportId}
        onChange={(e) => updateFields({ sportId: +e.currentTarget.value })}
      >
        <option value="">Select a sport</option>
        {sports.map((sport) => (
          <option key={sport.id} value={sport.id}>
            {sport.name}
          </option>
        ))}
      </select>
    </FormWrapper>
  );
}

export default SportPick;

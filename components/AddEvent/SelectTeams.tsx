import { useEffect, useState } from 'react';
import { FormEventData, Team } from '../../utils/types';
import FormWrapper from './FormWrapper';

type SelectTeamsProps = {
  homeTeamId: number;
  awayTeamId: number;
  sportId: number;
  updateFields: (fields: Partial<FormEventData>) => void;
};

function SelectTeams({
  homeTeamId,
  awayTeamId,
  sportId,
  updateFields,
}: SelectTeamsProps) {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    if (!sportId) return;
    fetch(`/api/teams?sportId=${sportId}`)
      .then((res) => res.json())
      .then((teams) => setTeams(teams.teams));
  }, [sportId]);

  return (
    <FormWrapper title="Select Teams">
      <label htmlFor="homeTeam">Home Team</label>
      <select
        required
        id="homeTeam"
        value={homeTeamId}
        onChange={(e) => updateFields({ homeTeamId: +e.currentTarget.value })}
      >
        <option value="">Select a team</option>
        {teams
          .filter((team) => team.id !== awayTeamId)
          .map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
      </select>
      <label htmlFor="awayTeam">Away Team</label>
      <select
        required
        id="awayTeam"
        value={awayTeamId}
        onChange={(e) => updateFields({ awayTeamId: +e.currentTarget.value })}
      >
        <option value="">Select a team</option>
        {teams
          .filter((team) => team.id !== homeTeamId)
          .map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
      </select>
    </FormWrapper>
  );
}

export default SelectTeams;

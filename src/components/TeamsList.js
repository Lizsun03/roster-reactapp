import React, { useContext } from 'react';
import _ from 'lodash';
import Team from './Team';
import TeamsContext from '../context/TeamsContext';

const TeamsList = () => {
  const { teams, setTeams } = useContext(TeamsContext);

  const handleRemoveTeam = (id) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  return (
    <React.Fragment>
      <div className="team-list">
        {!_.isEmpty(teams) ? (
          teams.map((team) => (
            <Team key={team.id} {...team} handleRemoveTeam={handleRemoveTeam} />
          ))
        ) : (
          <p className="message">No teams available. Please add some teams.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default TeamsList;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamForm from './TeamForm';
import TeamsContext from '../context/TeamsContext';

const AddTeam = ({ history }) => {
  const { teams, setTeams } = useContext(TeamsContext);
  const navigate = useNavigate();

  const handleOnSubmit = (team) => {
    console.log('handleOnSubmit called');
    setTeams([team, ...teams]);
    navigate('/');
  };

  return (
    <React.Fragment>
      <TeamForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddTeam;

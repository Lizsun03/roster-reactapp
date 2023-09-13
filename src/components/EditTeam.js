import React, { useContext } from 'react';
import TeamForm from './TeamForm';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TeamsContext from '../context/TeamsContext';

const EditTeam = ({ history }) => {
  const { teams, setTeams } = useContext(TeamsContext);
  const { id } = useParams();
  const teamToEdit = teams.find((team) => team.id === id);
  const navigate = useNavigate();

  const handleOnSubmit = (team) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams([team, ...filteredTeams]);
    navigate('/');
  };

  return (
    <div>
      <TeamForm team={teamToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditTeam;

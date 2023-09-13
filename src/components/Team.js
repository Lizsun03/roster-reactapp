import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Team = ({
  teamname,
  level,
  id,
  quantity,
  date,
  handleRemoveTeam
}) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className="team">
      <Card.Body>
        <Card.Title className="team-title">{teamname}</Card.Title>
        <div className="team-details">
          <div>Level: {level}</div>
          <div>Quantity: {quantity} </div>
          <div>ID: {id} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveTeam(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Team;


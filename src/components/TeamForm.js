import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const TeamForm = (props) => {
  const [team, setTeam] = useState(() => {
    return {
      teamname: props.team ? props.team.teamname : '',
      level: props.team ? props.team.level : '',
      quantity: props.team ? props.team.quantity : '',
      id: props.team ? props.team.id : '',
      date: props.team ? props.team.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { teamname, level, id, quantity } = team;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [teamname, level, id, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const team = {
        id: uuidv4(),
        teamname,
        level,
        id,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(team);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setTeam((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'id':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setTeam((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setTeam((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Team Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="teamname"
            value={teamname}
            placeholder="Enter name of team"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="level">
          <Form.Label>Team Level</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="level"
            value={level}
            placeholder="Enter name of level"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="id">
          <Form.Label>Team ID</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="id"
            value={id}
            placeholder="Enter team ID"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TeamForm;

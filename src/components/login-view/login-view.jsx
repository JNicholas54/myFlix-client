import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login-view.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Card, Form, Button } from 'react-bootstrap';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    props.toRegister();
  };

  const data = {
    Username: username,
    Password: password
  };

  fetch("https://movie-api.onrender.com/movies/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Login response: ", data);
      if (data.user) {
        onLoggedIn(data.user, data.token);
      } else {
        alert("No such user");
      }
    })
    .catch((e) => {
      alert("Something went wrong");
    });

  return (
    <Container className="login-container">
      <Card className="login-card mt-5">
        <Card.Body>
          <Card.Title className="text-center" as="h4">
            Login
          </Card.Title>

      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} 
          required
          placeholder="Please enter your Username"/>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} 
         required
         placeholder="Please enter your Password"
         />
        </Form.Group>

        <Button className="login-button mt-2 mr-2" variant="primary" type="submit" onClick={handleSubmit}>
        Sign in
        </Button>
        
        <Button className="register-button mt-2" variant="secondary" type="submit" onClick={handleRegisterClick}>
        Register
      </Button>


      </Form>
      </Card.Body>
      </Card>
    </Container>
  );
}

LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired,
};
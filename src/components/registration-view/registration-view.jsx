import React, { useState } from 'react';
import PropTypes from "prop-types";

import { Form, Button, Card, CardGroup, Container, Col, Row, } from "react-bootstrap";

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ Birthday, setBirthday] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, Birthday);
    /* Send a request to the server for authentication */
    /* then call props on registored user(username) */
    props.Registration(username);
  };

  return (
    <Container className="register-container">
      <Row className="justify-content-md-center mt-5">
        <Col md={5}>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title className="text-center" as="h4">
                  Please Register
                </Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      //required
                      placeholder="Enter a username"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      //required
                      minLength="8"
                      placeholder="Must be 8 or more characters"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      //required
                      placeholder="Enter your email address"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      placeholder="Enter your birthday"
                    />
                  </Form.Group>

                  <Button className="sign-up-button mt-2 mr-2" variant="primary" type="submit" onClick={handleSubmit}>
                    Register
                  </Button>
                  <Button className="back-button mt-2" variant="secondary" type="submit" onClick={() => { onBackClick(null); }}>
                    Back to the Login Page
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {};
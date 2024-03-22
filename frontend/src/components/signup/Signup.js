import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Sign Up</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>
              <Form.Group controlId="passwordId">
                <Form.Label>Your Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onSignupClick}>
              Sign Up
            </Button>
            <p className="mt-2">
              <Link to="/login"> Already Have An Account?</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;

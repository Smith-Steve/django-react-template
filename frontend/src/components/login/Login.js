import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(userData);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onLoginClick}>
              Login
            </Button>
            <p className="mt-2">
              <Link to="/signup">Don't have account? </Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

import React from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link} from "react-router-dom";

const Signup = () => {
  

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Auth Signup</h2>

        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"

            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"

            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
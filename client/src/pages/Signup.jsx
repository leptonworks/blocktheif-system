import React,{useState} from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link} from "react-router-dom";


const Signup = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }

  };
  

  return (
    <>
      
      <section className="h-screen grid ">
      

<div className='bg-gray-300 flex flex-col justify-center'>
            <div className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                
      <div className="p-4 box">
        <h2 className="mb-3 text-white">Auth Signup</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 bg-gray-900" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="text-white">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center text-white">
        Already have an account? <Link to="/login">Log In</Link>
      </div>


      </div>
      </div>

      </section>
    </>
  );
};

export default Signup;
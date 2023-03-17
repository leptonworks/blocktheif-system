import React from "react";
import { Link,  } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";



const login = () => {

    return (
  
    <section className="h-screen grid ">
      
      {/*left side */}

      <div className='bg-gray-300 flex flex-col justify-center'>
            <div className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                
            <div className="p-4 box">
        <h2 className="mb-3 text-white">Auth Login</h2>

        <Form>
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
            <Button variant="primary" type="Submit" className="text-white">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"

          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center text-white">
        Don't have an account? <Link to="/Signup">Sign up</Link>
      </div>


                

            </div>
        </div>

      
      {/* <div className="w-full h-full bg-black text-center md:h-screen"> */}
   
          


              
            
          
        
     
    </section>



  )
}


export default login;
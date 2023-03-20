import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { storeUser } from "../../helper";

const initialUser = { password: "", identifier: "" };

const Login = () => {

  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();


  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value, 
    }))
  };

  const handleLogin = async() => {

    const url = "http://localhost:1337/api/auth/local";

    try {
      if (user.identifier && user.password) {
        const {data} = await axios.post(url, user);
        if (data.jwt) {

          storeUser(data);


          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser)
          navigate("/home")
        }
      }
    } catch (error) {
      toast.error("Entered wrong credentials", {
        hideProgressBar: true,
      });
    }


  };


  return (
    <Row className="login">
      <Col sm="12" md={{ size: 4, offset: 4 }}>

    <br />
    <br />
    <br /><br />  

    <div>
      <h2 className="">login</h2>
          <FormGroup>
            <Input
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </FormGroup>

          <Button color="primary" onClick={handleLogin}>
            Login
          </Button>
          <h6>
            Click <Link to="/registration">Here</Link> to sign up
          </h6>

    </div>

    </Col>
  </Row>

  );
};

export default Login;

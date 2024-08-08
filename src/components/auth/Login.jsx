import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://videoaudit-server.onrender.com/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/create-form");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className=" mx-auto d-block mb-2"
          src="https://kairatechnologies.in/assets/image/fav.png"
          alt="logo"
        />
        {/* <div className="h4 mb-2 text-center">Sign In</div> */}
        {/* ALert */}

        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="email"
            autoComplete="off"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          <Link
            to="/create-form"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Log In
          </Link>
        </Button>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        kairatechnologies | &copy;2022
      </div>
    </div>
  );
};

export default Login;

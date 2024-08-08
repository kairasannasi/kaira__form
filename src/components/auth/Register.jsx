import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://videoaudit-server.onrender.com/api/user/register", {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
      })
      // .then((response) => {
      //   if (response.data.status) {
      //     navigate("/login");
      //   }
      // })
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
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="email"
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
          Register
        </Button>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        kairatechnologies | &copy;2022
      </div>
    </div>
  );
};

export default Register;

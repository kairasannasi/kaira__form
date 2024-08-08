import React from "react";
import Navbar from "../navbar/Navbar";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <div
        style={{
          height: "80%",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "50px",
          marginTop: "20rem",
        }}
      >
        <Button variant="primary">
          <Link
            to="/create-form"
            style={{ color: "white", textDecoration: "none" }}
          >
            Create Form
          </Link>
        </Button>{" "}
        <Button variant="success">
          <Link
            to="/form-list"
            style={{ color: "white", textDecoration: "none" }}
          >
            View List
          </Link>
        </Button>{" "}
      </div>
    </Container>
  );
};

export default Home;

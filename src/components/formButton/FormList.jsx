import React from "react";
import Navbar from "../navbar/Navbar";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BsArrowLeftCircleFill } from "react-icons/bs";
const FormList = () => {
  return (
    <Container>
      <Navbar />
      <Button
        className=""
        variant="danger"
        style={{
          marginLeft: "87%",
          marginTop: "-5.5rem",
          position: "sticky",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          {" "}
          <BsArrowLeftCircleFill />
        </Link>
      </Button>
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
            to="/view-list"
            style={{ color: "white", textDecoration: "none" }}
          >
            Video Audit Detail's
          </Link>
        </Button>{" "}
        <Button variant="success">
          <Link
            to="/zoom-list"
            style={{ color: "white", textDecoration: "none" }}
          >
            Zoom meet Details
          </Link>
        </Button>{" "}
        <Button variant="info">
          <Link
            to="/feedback-list"
            style={{ color: "white", textDecoration: "none" }}
          >
            Feedback Details
          </Link>
        </Button>{" "}
      </div>
    </Container>
  );
};

export default FormList;

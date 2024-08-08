import React from "react";
import { Col, Container, Nav } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import { IoMdLogIn } from "react-icons/io";
const Navbar = () => {
  return (
    <Container>
      <Nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#003163", height: "60px" }}
      >
        <Col
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "30px",
          }}
        >
          <img
            src="https://kairatechnologies.in/assets/image/logo.png"
            alt="logo"
            width={110}
          />

          {/* <Button variant="primary">
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              <IoMdLogIn /> Login
            </Link>
          </Button> */}
        </Col>
      </Nav>
    </Container>
  );
};

export default Navbar;

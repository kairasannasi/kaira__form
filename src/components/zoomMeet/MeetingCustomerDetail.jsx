import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import axios from "axios";

const MeetingCustomerDetail = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://videoaudit-server.onrender.com/api/marketing/getCustomer/${id}`
        );
        setData(response.data.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : "Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading)
    return (
      <div
        style={{
          width: "50px",
          height: "50px",
          position: "relative",
          marginTop: "20%",
          marginLeft: "50%",
          border: "5px solid #3498db",
          borderTop: "5px solid #3498db",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
    );
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Navbar />

      <div style={{ marginTop: "5rem" }}>
        <h4
          style={{
            color: "#003163",
            fontWeight: "600",
            fontSize: "20px",
            textAlign: "center",
            textDecoration: "underline",
            marginBottom: "5rem",
          }}
        >
          Zoom-meet Customer Detail's
        </h4>
        <Table striped>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody key={data._id}>
            <tr>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#003163",
                  fontSize: "16px",
                }}
              >
                Customer Name
              </td>
              <td>{data.newCustomerName}</td>
              <td></td>
            </tr>
            <tr style={{ marginTop: "50px" }}>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  fontSize: "16px",
                }}
              >
                Mobile Number
              </td>
              <td>+91 {data.mobNo}</td>
              <td></td>
            </tr>
            <tr style={{ marginTop: "50px" }}>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#003163",
                  fontSize: "16px",
                }}
              >
                Customer Address
              </td>
              <td>{data.newCustomerAddress}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  fontSize: "16px",
                }}
              >
                Business Name
              </td>
              <td>{data.businessName}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#003163",
                  fontSize: "16px",
                }}
              >
                Business Type
              </td>
              <td>{data.businesstype}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  fontSize: "16px",
                }}
              >
                How old is the Business
              </td>
              <td>{data.businessYear} </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#003163",
                  fontSize: "16px",
                }}
              >
                Has ever tried digital marketing before?
              </td>
              <td>{data.dgUse}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  fontSize: "16px",
                }}
              >
                Why you want to do digital Marketing for your business
              </td>
              <td>{data.dgForYourBusiness} </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button variant="danger" style={{ marginTop: "2rem" }}>
        <Link
          to="/zoom-list"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          <BsArrowLeftCircleFill /> Back
        </Link>
      </Button>
    </Container>
  );
};

export default MeetingCustomerDetail;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const FeedbackCustomerDetails = ({id}) => {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchUser = async () => {
         try {
           const response = await axios.get(
             `https://videoaudit-server.onrender.com/api/feedback/getFeedback/${id}`
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
          Customer Feedback Detail's
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
              <td>{data.customerName}</td>
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
              <td>+91 {data.phNo}</td>
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
                Service Served
              </td>
              <td>{data.serviceServed}</td>
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
                Service Completed
              </td>
              <td>{data.serviceComplete} </td>
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
                Satisfaction Level
              </td>
              <td>{data.satisfactionLevel}</td>
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
                Any feedback for Desingers / Editors
              </td>
              <td>{data.feedbackDesigners_Editors} </td>
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
                Feedback Rating for CRM
              </td>
              <td>{data.ratingForCRM}</td>
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
                Reherts received and explained
              </td>
              <td>{data.reherts} </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button variant="danger" style={{ marginTop: "2rem" }}>
        <Link
          to="/feedback-list"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          <BsArrowLeftCircleFill /> Back
        </Link>
      </Button>
    </Container>
  );
}

export default FeedbackCustomerDetails
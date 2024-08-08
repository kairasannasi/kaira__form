import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import Navbar from '../navbar/Navbar';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FeedbackList = ({ setId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://videoaudit-server.onrender.com/api/feedback/getAll`
      );
      setData(response.data.data);
    } catch (err) {
      setError(err.response ? err.response.data.message : "Server error");
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  const handleEdit = (id) => {
    setId(id);
    navigate(`/feedback-detail/${id}`);
  };
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
            marginBottom: "2rem",
          }}
        >
          Zoom-meet Customer List
        </h4>
        <Table striped>
          <thead>
            <tr>
              <th>No</th>
              <th>Customer Name</th>
              <th>Satisfaction Level</th>
              <th>Rating for CRM</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1} </td>
                <td style={{ color: "black" }}>{data.customerName}</td>
                <td style={{ color: "black" }}>{data.satisfactionLevel}</td>
                <td style={{ color: "black" }}>{data.ratingForCRM}</td>
                <td>
                  {" "}
                  <Button
                    onClick={() => {
                      handleEdit(data._id);
                    }}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      border: "none",
                    }}
                  >
                    View More
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Button variant="danger" style={{ marginTop: "2rem" }}>
        <Link
          to="/form-list"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          <BsArrowLeftCircleFill /> Back
        </Link>
      </Button>
    </Container>
  );
};

export default FeedbackList
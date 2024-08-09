import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import axios from "axios";

const ClientDetail = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://videoaudit-server.onrender.com/api/customer/getCustomer/${id}`
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
          }}
        >
          Video-Audit Customer Detail's
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
                Customer Address reelClip
              </td>
              <td>{data.customerAddress}</td>
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
                Reels / Clip / Photoa
              </td>
              <td style={{width:'40%'}} >{data.reelClip}</td>
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
                What was the client's response?
              </td>
              <td>{data.clientResponse}</td>
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
                Shoot Time taken
              </td>
              <td>{data.shootTime}</td>
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
                No of Video taken
              </td>
              <td>{data.noOfVideo}</td>
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
                No of Pictures Clicked
              </td>
              <td>{data.noOfPicture} </td>
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
                Total memory Occupied
              </td>
              <td>{data.memoryOccupied}</td>
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
                Reels Plan
              </td>
              <td>{data.reelsPlan} </td>
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
                Videos Checked for Reels{" "}
              </td>
              <td>{data.videosCheck} </td>
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
                Is the video taken sufficient for plan
              </td>
              <td>{data.sufficientPlan} </td>
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
                Reels Strategy
              </td>
              <td>{data.reelsStraegy}</td>
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
                Remarks
              </td>
              <td>{data.remarks}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button variant="danger" style={{ marginTop: "2rem" }}>
        <Link
          to="/view-list"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          <BsArrowLeftCircleFill /> Back
        </Link>
      </Button>
    </Container>
  );
};

export default ClientDetail;

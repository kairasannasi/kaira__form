import React, { useState } from "react";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Navbar from "../../navbar/Navbar";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
const CreateForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [clientResponse, setClientResponse] = useState("");
  const [shootTime, setShootTime] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [noOfVideo, setNoOfVideo] = useState("");
  const [noOfPicture, setNoOfPicture] = useState("");
  const [memoryOccupied, setMemoryOccupied] = useState("");
  const [reelsPlan, setReelsPlan] = useState("");
  const [videosCheck, setVideosCheck] = useState("");
  const [sufficientPlan, setSufficientPlan] = useState("");
  const [reelsStraegy, setReelsStraegy] = useState("");
  const [remarks, setRemarks] = useState("");
  const [reelClip,setReelClip] = useState("");
  const postDetail = () =>
    axios
      .post("https://videoaudit-server.onrender.com/api/customer/add", {
        customerName: customerName,
        clientResponse: clientResponse,
        shootTime: shootTime,
        customerAddress: customerAddress,
        noOfVideo: noOfVideo,
        noOfPicture: noOfPicture,
        memoryOccupied: memoryOccupied,
        reelsPlan: reelsPlan,
        videosCheck: videosCheck,
        sufficientPlan: sufficientPlan,
        reelsStraegy: reelsStraegy,
        remarks: remarks,
        reelClip:reelClip
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

  const handleResponse = (e) => {
    setClientResponse(e.target.value);
  };

  const handleReelsPlan = (e) => {
    setReelsPlan(e.target.value);
  };

  const handleVideoCheck = (e) => {
    setVideosCheck(e.target.value);
  };

  const handleSufficientPlan = (e) => {
    setSufficientPlan(e.target.value);
  };
  return (
    <Container>
      <Navbar />
      <div>
        <Card border="light" className="bg-white shadow-sm mb-4 mt-5">
          <Card.Body>
            <h5
              className="mb-5 text-center text-decoration-underline "
              style={{ color: "#003163", fontWeight: "600", fontSize: "20px" }}
            >
              Add Client Detail's
            </h5>
            <Form>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="customerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="customerAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows="3"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="customerName">
                    <Form.Label>Reels / Clips / Photos</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows="3"
                      value={reelClip}
                      onChange={(e) => setReelClip(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={6} className="mb-3">
                  <Form.Group id="clientResponse">
                    <Form.Label>Client Response</Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={clientResponse}
                      onChange={handleResponse}
                    >
                      <option>--Select Option --</option>
                      <option value="Good">Good</option>
                      <option value="Okay">Okay</option>
                      <option value="Aggressive">Aggressive</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="shootTime">
                    <Form.Label>Shoot time taken</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={shootTime}
                      onChange={(e) => setShootTime(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="noOfVideo">
                    <Form.Label>No of Video Taken</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={noOfVideo}
                      onChange={(e) => setNoOfVideo(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="noOfPicture">
                    <Form.Label>No of Pictures Clicked</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={noOfPicture}
                      onChange={(e) => setNoOfPicture(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="memoryOccupied">
                    <Form.Label>Memory Occupied</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={memoryOccupied}
                      onChange={(e) => setMemoryOccupied(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="reelsPlan">
                    <Form.Label>Reels Plan</Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={reelsPlan}
                      onChange={handleReelsPlan}
                    >
                      <option>--Select Option --</option>
                      <option value="Pro">Pro</option>
                      <option value="Basic">Basic</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="videosCheck">
                    <Form.Label>Videos Checked for Reels </Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={videosCheck}
                      onChange={handleVideoCheck}
                    >
                      <option>--Select Option --</option>
                      <option value="25%">25%</option>
                      <option value="50%">50%</option>
                      <option value="75%">75%</option>
                      <option value="100%">100%</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="sufficientPlan">
                    <Form.Label>
                      Is the video taken sufficient for plan
                    </Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={sufficientPlan}
                      onChange={handleSufficientPlan}
                    >
                      <option>--Select Option --</option>
                      <option value="Yes">Yes</option>
                      <option value="AboveAverage">Above Average</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="reelsStraegy">
                    <Form.Label>Reels Strategy</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={reelsStraegy}
                      onChange={(e) => setReelsStraegy(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="remarks">
                    <Form.Label>Remarks</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="primary" onClick={postDetail}>
                  <Link
                    to="/form-list"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    Submit
                  </Link>
                </Button>
                <Button variant="danger">
                  <Link
                    to="/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    <BsArrowLeftCircleFill /> Back
                  </Link>
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
      {/* Footer */}
    </Container>
  );
};

export default CreateForm;

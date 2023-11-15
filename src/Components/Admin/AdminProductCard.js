import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import prod1 from "../../Assets/prod1.png";
const AdminProductCard = ({ item }) => {
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          padding: "2px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit">Delete</div>
            <Link style={{ textDecoration: "none" }} to={`/admin/editproduct/`}>
              <div className="d-inline item-delete-edit">Edit</div>
            </Link>
          </Col>
        </Row>
        <Link
          to={`/products/:id`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
                Iphone 14 PRO Max with ultra max screen
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex align-items-center justify-content-between">
                <div className="card-rate">4.5</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">EUR</div>
                  <div className="card-price">1400</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminProductCard;

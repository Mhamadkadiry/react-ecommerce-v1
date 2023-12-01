import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import brand1 from "../../Assets/brand1.png";
import brand2 from "../../Assets/brand2.png";
import brand3 from "../../Assets/brand3.png";
import BrandCard from "./BrandCard";
const BrandContainer = ({ data, loading }) => {
  return (
    <Container className="mb-5">
      <div className="admin-content-text mt-2 p-2 p-md-4">All Brands</div>
      <Row
        className={`my-2 d-flex ${
          loading ? "justify-content-center" : "justify-content-between"
        }`}
      >
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : data ? (
          data.map((brand, index) => (
            <BrandCard key={index} img={brand.image} />
          ))
        ) : (
          <h4>No brands found</h4>
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;

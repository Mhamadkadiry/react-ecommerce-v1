import React from "react";
import { Container, Row } from "react-bootstrap";
import brand1 from "../../Assets/brand1.png";
import brand2 from "../../Assets/brand2.png";
import brand3 from "../../Assets/brand3.png";
import BrandCard from "./BrandCard";
const BrandContainer = () => {
  return (
    <Container className="mb-5">
      <div className="admin-content-text mt-2 p-2 p-md-4">All Brands</div>
      <Row className="my-2 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
      </Row>
    </Container>
  );
};

export default BrandContainer;

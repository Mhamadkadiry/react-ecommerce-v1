import React from "react";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../Assets/brand1.png";
import brand2 from "../../Assets/brand2.png";
import brand3 from "../../Assets/brand3.png";
import Subtitle from "../Utilities/Subtitle";

const BrandFeatured = ({ title, btntitle }) => {
  return (
    <Container>
      <Subtitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  );
};

export default BrandFeatured;

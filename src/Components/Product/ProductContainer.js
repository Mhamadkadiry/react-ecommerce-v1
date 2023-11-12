import React from "react";
import { Container, Row } from "react-bootstrap";
import Subtitle from "../Utilities/Subtitle";
import ProductCard from "./ProductCard";

const ProductContainer = ({ title, btntitle, linkTo }) => {
  return (
    <Container>
      <Subtitle title={title} btntitle={btntitle} linkTo={`${linkTo}`} />
      <Row className="my-2 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default ProductContainer;

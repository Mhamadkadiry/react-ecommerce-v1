import React from "react";
import { Container, Row } from "react-bootstrap";
import Subtitle from "../Utilities/Subtitle";
import ProductCard from "./ProductCard";

const ProductContainer = ({ title, btntitle, linkTo, products }) => {
  return (
    <Container>
      {products ? (
        <Subtitle title={title} btntitle={btntitle} linkTo={`${linkTo}`} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default ProductContainer;

import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";

const ProductDetails = ({ images, brand, product }) => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery images={images} />
        </Col>

        <Col lg="8">
          <ProductDescription product={product} brand={brand} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;

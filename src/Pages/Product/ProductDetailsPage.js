import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Product/ProductDetails";
import RateContainer from "../../Components/Rating/RateContainer";
import ProductContainer from "../../Components/Product/ProductContainer";

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <ProductContainer title="Products you may like" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;

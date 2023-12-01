import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import Subtitle from "../Utilities/Subtitle";
import useGetHomeBrands from "../../Hooks/Brand/useGetHomeBrands";

const BrandFeatured = ({ title, btntitle }) => {
  const [brands, loading] = useGetHomeBrands();
  return (
    <Container>
      <Subtitle title={title} btntitle={btntitle} linkTo="/allbrands" />
      <Row
        className={`my-4 d-flex ${
          loading ? "justify-content-center" : "justify-content-between"
        }`}
      >
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : brands.data ? (
          brands.data
            .slice(0, 5)
            .map((brand, index) => <BrandCard key={index} img={brand.image} />)
        ) : (
          <h4>No brands found</h4>
        )}
      </Row>
    </Container>
  );
};

export default BrandFeatured;

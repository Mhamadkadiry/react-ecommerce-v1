import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Subtitle from "../Utilities/Subtitle";
import CategoryCard from "../Category/CategoryCard";
import useGetHomeCategories from "../../Hooks/Category/useGetHomeCategories";

const HomeCategory = () => {
  const [categories, loading, colors] = useGetHomeCategories();
  return (
    <Container className="category-home-subtitle">
      <Subtitle title="Categories" btntitle="more" linkTo="/allcategories" />
      <Row
        className={`my-4 d-flex ${
          loading ? "justify-content-center" : "justify-content-between"
        }`}
      >
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : categories.data ? (
          categories.data
            .slice(0, 5)
            .map((category, index) => (
              <CategoryCard
                key={index}
                title={category.name}
                img={category.image}
                background={colors[index]}
              />
            ))
        ) : (
          <h4>No categories found</h4>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;

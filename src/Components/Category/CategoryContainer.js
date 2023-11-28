import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryAction";
const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <Container className="mb-5">
      <div className="admin-content-text mt-2 p-2 p-md-4">All Categories</div>
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
          data.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.name}
              img={category.image}
              background={colors[Math.floor(Math.random() * 5) + 1]}
            />
          ))
        ) : (
          <h4>No categories found</h4>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;

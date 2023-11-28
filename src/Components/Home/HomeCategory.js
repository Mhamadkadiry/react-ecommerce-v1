import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Subtitle from "../Utilities/Subtitle";
import CategoryCard from "../Category/CategoryCard";
import clothe from "../../Assets/clothe.png";
import cat2 from "../../Assets/cat2.png";
import laptop from "../../Assets/laptop.png";
import sale from "../../Assets/sale.png";
import pic from "../../Assets/pic.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryAction";

const HomeCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector((state) => state.allCategories.categories);
  const loading = useSelector((state) => state.allCategories.loading);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
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

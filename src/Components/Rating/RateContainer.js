import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../Assets/rate.png";
import RateItem from "./RateItem";
import RateComment from "./RateComment";
import Pagination from "../Utilities/Pagination";
import GenerateStarsHook from "../../Hooks/GenerateStarsHook";
const RateContainer = ({ reviews, product }) => {
  let stars = null;
  if (product.ratingsAverage) {
    stars = GenerateStarsHook(product.ratingsAverage);
  }
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex align-items-center">
          <div className="sub-title d-inline p-1">Ratings</div>
          {stars ? (
            stars
          ) : (
            <>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
            </>
          )}
          <div className="cat-rate d-inline p-1 pt-2">
            {product.ratingsAverage ? product.ratingsAverage : 0}
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            ({product.ratingsQuantity ? product.ratingsQuantity : 0} ratings)
          </div>
        </Col>
      </Row>
      <RateComment />
      {reviews
        ? reviews.map((review, index) => {
            return (
              <RateItem
                key={index}
                user={review.user.name}
                comment={review.comment}
                ratings={review.ratings}
              />
            );
          })
        : null}
      <Pagination />
    </Container>
  );
};

export default RateContainer;

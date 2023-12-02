import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import prod1 from "../../Assets/watch.jpeg";
import favoff from "../../Assets/fav-off.png";
import rate from "../../Assets/rate.png";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex">
      <Card
        border="light"
        className="mt-3"
        style={{ boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)" }}
      >
        <Link to="/products/:id">
          <Card.Img
            height="200px"
            width="100%"
            src={prod1}
            alt="product-image"
          />
        </Link>
        <Card.Footer
          style={{ cursor: "default" }}
          border="light"
          className="border-top border-light p-4"
        >
          <a href="#" style={{ textDecoration: "none" }} className="h5">
            Apple Watch Series 3
          </a>
          <h6 className="font-weight-light text-gray mt-2">
            Space Gray Aluminum Case with Black Sport Band
          </h6>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="d-flex">
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star-half text-warning"></i>
              <Badge pill variant="warning" className="ml-2 bg-warning">
                4.7
              </Badge>
            </div>
            <div>
              <Card.Img
                src={favoff}
                width="30px"
                height="30px"
                alt="product-favorite"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="h5 mb-0 text-gray">$299.00</span>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;

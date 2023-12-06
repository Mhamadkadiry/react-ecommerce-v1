import React, { useState } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import defaultImage from "../../Assets/defaultImage.jpeg";
import favoff from "../../Assets/fav-off.png";
import rate from "../../Assets/rate.png";
import { Link } from "react-router-dom";
import GenerateStarsHook from "../../Hooks/GenerateStarsHook";
const ProductCard = ({ item }) => {
  const [imageSrc, setImageSrc] = useState(item.imageCover);

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };
  const stars = GenerateStarsHook(item.ratingsAverage);
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex">
      <Card
        border="light"
        className="mt-3"
        style={{
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link to={`/products/${item._id}`}>
          <Card.Img
            onError={handleImageError}
            height="200px"
            width="100%"
            src={imageSrc}
            alt="product-image"
          />
        </Link>
        <Card.Footer
          style={{ cursor: "default", minHeight: "230px" }}
          border="light"
          className="border-top border-light p-4"
        >
          <a href="#" style={{ textDecoration: "none" }} className="h5">
            {item.title}
          </a>
          <h6 className="font-weight-light text-gray mt-2">
            {item.description.slice(0, 75)}...
          </h6>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="d-flex">
              {item.ratingsAverage ? (
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
              <Badge pill variant="warning" className="ml-2 bg-warning">
                {item.ratingsAverage ?? 0}
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
            <div>
              <span className="h5 mb-0 text-muted">
                <del>EUR {item.price}</del>
              </span>
            </div>
            <div>
              <span className="h5 mb-0 text-gray">
                EUR {item.priceAfterDiscount}
              </span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;

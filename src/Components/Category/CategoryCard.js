import React, { useState } from "react";
import { Col } from "react-bootstrap";
import defaultIcon from "../../Assets/defaultIcon.png";

const CategoryCard = ({ background, img, title }) => {
  const [imageSrc, setImageSrc] = useState(img ?? defaultIcon);
  console.log("title" + title + "image" + img);
  const handleImageError = () => {
    setImageSrc(defaultIcon);
  };
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around "
    >
      <div className="allCard mb-5 ">
        <div
          className="categoty-card"
          style={{ backgroundColor: `${background}` }}
        ></div>{" "}
        <img
          onError={handleImageError}
          alt="zcv"
          src={imageSrc}
          className="categoty-card-img"
        />
        <p className="categoty-card-text my-2">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;

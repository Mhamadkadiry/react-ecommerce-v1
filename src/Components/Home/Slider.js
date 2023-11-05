import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import sliderimg from "../../Assets/slider1.png";
import slider4 from "../../Assets/slider4.png";
import prod3 from "../../Assets/prod3.png";
import prod4 from "../../Assets/prod4.png";

const Silder = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className=""
            src={slider4}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">New stuff!</h3>
            <p className="slider-text">
              Samsung S23 is now available at Kadiri!
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className=""
            src={sliderimg}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">New Collection!</h3>
            <p className="slider-text">Buy two and get one for free!</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background3" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "373.53px" }}
            className=""
            src={prod3}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">Discounts!</h3>
            <p className="slider-text">New collection for winter</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background4" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "373.53px" }}
            className=""
            src={prod4}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">Black Friday is COMING!</h3>
            <p className="slider-text">Discounts up to 85%</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Silder;

import React from "react";
import { Col, Row } from "react-bootstrap";

const SideFilter = () => {
  return (
    <div className="w-100 mt-3 mt-lg-5 p-3">
      <Row>
        <Col xs={4} lg={12} className="mb-3">
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">Categories</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2">All</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Home Appliance</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Laptops</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">DVD</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Books</div>
            </div>
          </div>
        </Col>

        <Col xs={4} lg={12} className="mb-3">
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Brands</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2">All</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Apple</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Samsung</div>
            </div>
            {/* ... Other brand filters */}
          </div>
        </Col>

        <Col xs={4} lg={12}>
          <div>
            <div className="filter-title my-3">Price</div>
            <div className="d-flex">
              <p className="filter-sub my-2">From:</p>
              <input
                className="m-2 text-center"
                type="number"
                style={{ width: "50px", height: "25px" }}
              />
            </div>
            <div className="d-flex">
              <p className="filter-sub my-2">To:</p>
              <input
                className="m-2 text-center ms-4"
                type="number"
                style={{ width: "50px", height: "25px" }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SideFilter;

import React from "react";
import { Col, Row } from "react-bootstrap";

const ProductDescription = ({ product, brand }) => {
  return (
    <div>
      <Row className="mt-2">
        <Col md="8">
          <div className="cat-title d-inline">
            <h4>{product.title}</h4>{" "}
          </div>
        </Col>
      </Row>
      {brand ? (
        <Row>
          <Col md="8">
            <h6>
              <a className="brand-badge badge bg-info text-dark" href="#">
                {brand.name}
              </a>{" "}
            </h6>
          </Col>
        </Row>
      ) : null}
      <Row>
        <Col md="8" className="mt-1">
          <h6 class="product-title-price">
            <small>PRICED at</small>
          </h6>
          {product.price ? (
            <div className="d-flex">
              <h3 className="text-muted">
                <del>EUR {product.price}</del>
              </h3>
              <h3 className="ms-2">EUR {product.priceAfterDiscount}</h3>
            </div>
          ) : (
            <h3>EUR 399</h3>
          )}
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1">
          <div className="product-description-text d-inline">
            Available Quantity: {product.quantity}
          </div>
          {product.colors ? (
            product.colors.length > 0 ? (
              <>
                <div className="d-flex">
                  <div className="product-description-text">Colors:</div>
                </div>

                <div className="d-flex p-2">
                  {product.colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        className="color mx-1"
                        style={{
                          backgroundColor: color,
                          border: `3px solid ${color}`,
                        }}
                      ></div>
                    );
                  })}
                </div>
              </>
            ) : null
          ) : null}
        </Col>
      </Row>
      <Row className="mt-2">
        <div className="product-description-text">Description :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {product.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-cart-add px-3 py-3 d-inline">Add to cart</div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDescription;

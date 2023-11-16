import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./../Product/ProductCard";
import Pagination from "../Utilities/Pagination";
const UserFavoriteProducts = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">Favorite Products</div>
      <Row className="justify-content-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavoriteProducts;

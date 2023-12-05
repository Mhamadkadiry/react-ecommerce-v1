import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Product/ProductDetails";
import RateContainer from "../../Components/Rating/RateContainer";
import ProductContainer from "../../Components/Product/ProductContainer";
import { useParams } from "react-router-dom";
import GetProductDetailsHook from "../../Hooks/Product/GetProductDetailsHook";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [productItem, images, brand, similarProd, reviews] =
    GetProductDetailsHook(id);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails images={images} brand={brand} product={productItem} />
        <RateContainer reviews={reviews} product={productItem} />
        <ProductContainer
          title="Products you may like"
          products={similarProd.slice(0, 4)}
        />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;

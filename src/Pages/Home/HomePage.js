import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductContainer from "../../Components/Product/ProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import GetHomeProductsHook from "../../Hooks/Product/GetHomeProductsHook";

const HomePage = () => {
  const productItems = GetHomeProductsHook();
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <ProductContainer
        title="Best selling"
        btntitle="more"
        linkTo="/products"
      />
      <DiscountSection />
      <ProductContainer
        products={productItems}
        title="Newest"
        btntitle="more"
        linkTo="/products"
      />
      <BrandFeatured title="Brands" btntitle="more" />
      <ProductContainer
        products={productItems}
        title="Best selling"
        btntitle="more"
        linkTo="/products"
      />
    </div>
  );
};

export default HomePage;

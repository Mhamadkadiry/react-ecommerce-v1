import React from "react";
import NavbarLogin from "../../Components/Utilities/NavbarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductContainer from "../../Components/Product/ProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Utilities/Footer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavbarLogin />
      <Slider />
      <HomeCategory />
      <ProductContainer title="Best selling" btntitle="more" />
      <DiscountSection />
      <ProductContainer title="Newest" btntitle="more" />
      <ProductContainer title="Best selling" btntitle="more" />
      <BrandFeatured title="Brands" btntitle="more" />
      <Footer />
    </div>
  );
};

export default HomePage;

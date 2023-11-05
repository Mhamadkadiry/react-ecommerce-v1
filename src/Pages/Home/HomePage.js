import React from "react";
import NavbarLogin from "../../Components/Utilities/NavbarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";

const HomePage = () => {
  return (
    <div className="font">
      <NavbarLogin />
      <Slider />
      <HomeCategory />
    </div>
  );
};

export default HomePage;

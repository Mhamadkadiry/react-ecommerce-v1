import React from "react";
import Pagination from "../../Components/Utilities/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";

const AllBrandsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrandsPage;

import React from "react";
import Pagination from "../../Components/Utilities/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";
import GetAllBrandsPageHook from "../../Hooks/Brand/GetAllBrandsPageHook";

const AllBrandsPage = () => {
  const [brands, loading, getPage] = GetAllBrandsPageHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer data={brands.data} loading={loading} />
      {brands.paginationResult?.numberOfPages > 1 ? (
        <Pagination
          pageCount={brands.paginationResult?.numberOfPages ?? 0}
          onPress={getPage}
        />
      ) : null}
    </div>
  );
};

export default AllBrandsPage;

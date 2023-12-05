import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utilities/Pagination";
import GetAllCategoriesPageHook from "../../Hooks/Category/GetAllCategoriesPageHook";

const AllCategoriesPage = () => {
  const [categories, loading, getPage] = GetAllCategoriesPageHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={categories.data} loading={loading} />
      {categories.paginationResult?.numberOfPages > 1 ? (
        <Pagination
          pageCount={categories.paginationResult?.numberOfPages ?? 0}
          onPress={getPage}
        />
      ) : null}
    </div>
  );
};

export default AllCategoriesPage;

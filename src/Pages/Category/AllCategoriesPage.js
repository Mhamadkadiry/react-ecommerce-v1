import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utilities/Pagination";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getSpecificPageCategories,
} from "../../redux/actions/categoryAction";

const AllCategoriesPage = () => {
  const productsPerPage = 12;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories(productsPerPage));
  }, []);

  const categories = useSelector((state) => state.allCategories.categories);
  const loading = useSelector((state) => state.allCategories.loading);

  const getPage = (page) => {
    dispatch(getSpecificPageCategories(productsPerPage, page));
  };
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

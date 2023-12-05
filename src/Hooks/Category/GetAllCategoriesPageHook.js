import React, { useEffect } from "react";
import {
  getAllCategories,
  getSpecificPageCategories,
} from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const GetAllCategoriesPageHook = () => {
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
  return [categories, loading, getPage];
};

export default GetAllCategoriesPageHook;

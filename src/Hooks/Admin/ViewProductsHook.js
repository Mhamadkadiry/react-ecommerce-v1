import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../redux/actions/productAction";

const ViewProductsHook = () => {
  const limit = 6;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, []);
  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, limit));
  };
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  let productItems = [];
  if (allProducts.data) {
    productItems = allProducts.data;
  }
  let pagination = [];
  if (allProducts.paginationResult) {
    pagination = allProducts.paginationResult;
  }
  return [productItems, pagination, onPress];
};

export default ViewProductsHook;

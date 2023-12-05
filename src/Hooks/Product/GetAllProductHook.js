import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productAction";

const GetAllProductHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  let productItems = [];
  if (allProducts.data) {
    productItems = allProducts.data;
  }
  return productItems;
};

export default GetAllProductHook;

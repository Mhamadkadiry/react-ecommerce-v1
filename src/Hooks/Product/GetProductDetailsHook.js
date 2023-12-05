import React, { useEffect } from "react";
import { getOneProduct } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../../Assets/defaultImage.jpeg";

const GetProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);
  const product = useSelector((state) => state.allProducts.specificProduct);
  let productItem = [];
  if (product.data) {
    productItem = product.data;
  }

  let images = [];
  if (productItem.images) {
    images = productItem.images.map((item) => {
      return {
        original: item,
      };
    });
  } else {
    images = [{ original: `${defaultImage}` }];
  }

  return [productItem, images];
};

export default GetProductDetailsHook;

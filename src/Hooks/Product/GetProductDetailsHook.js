import React, { useEffect } from "react";
import {
  getOneProduct,
  getProductReviews,
  getSimilarProducts,
} from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../../Assets/defaultImage.jpeg";
import { getOneBrand } from "../../redux/actions/brandAction";

const GetProductDetailsHook = (prodId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodId));
  }, []);
  const product = useSelector((state) => state.allProducts.specificProduct);
  const oneBrand = useSelector((state) => state.allBrands.specificBrand);
  const similarProducts = useSelector(
    (state) => state.allProducts.similarProducts
  );
  const productReviews = useSelector(
    (state) => state.allProducts.productReviews
  );
  let productItem = [];
  if (product.data) {
    productItem = product.data;
  }

  useEffect(() => {
    if (productItem.brand) dispatch(getOneBrand(productItem.brand));
    if (productItem.category) {
      dispatch(getSimilarProducts(productItem.category._id));
    }
    if (productItem._id) {
      dispatch(getProductReviews(productItem._id));
    }
  }, [productItem]);

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

  let brand = [];
  if (oneBrand.data) brand = oneBrand.data;
  let similarProd = [];
  if (similarProducts.data) similarProd = similarProducts.data;
  let reviews = [];
  if (productReviews.data) reviews = productReviews.data;

  return [productItem, images, brand, similarProd, reviews];
};

export default GetProductDetailsHook;

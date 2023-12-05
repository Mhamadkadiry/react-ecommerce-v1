import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrands,
  getSpecificPageBrands,
} from "../../redux/actions/brandAction";

const GetAllBrandsPage = () => {
  const productsPerPage = 12;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands(productsPerPage));
  }, []);

  const brands = useSelector((state) => state.allBrands.brands);
  const loading = useSelector((state) => state.allBrands.loading);

  const getPage = (page) => {
    dispatch(getSpecificPageBrands(productsPerPage, page));
  };
  return [brands, loading, getPage];
};

export default GetAllBrandsPage;

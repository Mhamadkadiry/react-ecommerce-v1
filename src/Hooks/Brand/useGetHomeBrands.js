import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandAction";

const useGetHomeBrands = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  const brands = useSelector((state) => state.allBrands.brands);
  const loading = useSelector((state) => state.allBrands.loading);
  return [brands, loading];
};

export default useGetHomeBrands;

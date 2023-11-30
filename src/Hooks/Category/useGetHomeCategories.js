import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryAction";

const useGetHomeCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector((state) => state.allCategories.categories);
  const loading = useSelector((state) => state.allCategories.loading);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return [categories, loading, colors];
};

export default useGetHomeCategories;

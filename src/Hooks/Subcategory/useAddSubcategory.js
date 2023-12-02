import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryAction";
import notify from "../useNotification";
import { createSubcategory } from "../../redux/actions/subcategoryAction";
import { redirect } from "react-router-dom";

const useAddSubcategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("No internet connection", "error");
      return;
    }
    dispatch(getAllCategories());
  }, []);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  const categories = useSelector((state) => state.allCategories.categories);

  const subcategories = useSelector(
    (state) => state.allSubcategories.subcategories
  );

  const handleOnChange = (event) => {
    setId(event.target.value);
  };

  const handleChangeName = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id == "0") {
      notify("Please choose category", "warning");
      return;
    }
    if (name == "" || name.length < 2) {
      notify("Please enter a valid subcategory name", "warning");
      return;
    }
    setLoading(true);
    setIsPressed(true);
    await dispatch(createSubcategory({ name, category: id }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId(0);
      setTimeout(() => setIsPressed(false), 1000);
      if (subcategories.status === 201) {
        notify("Subcategory added", "success");
      } else if (
        subcategories ===
        "Error AxiosError: Request failed with status code 401"
      ) {
        notify("Please login again", "error");
        return redirect("/login");
      } else {
        notify("An error occured while adding subcategory", "error");
      }
    }
  }, [loading]);
  return [
    categories,
    loading,
    handleOnChange,
    handleSubmit,
    handleChangeName,
    name,
    isPressed,
  ];
};

export default useAddSubcategory;

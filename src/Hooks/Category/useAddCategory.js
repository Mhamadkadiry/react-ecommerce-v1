import React, { useEffect, useState } from "react";
import avatar from "../../Assets/avatar.png";
import { createCategory } from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotification";

const useAddCategory = () => {
  const dispatch = useDispatch();

  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allCategories.categories);
  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null)
      return notify("Please enter all required fields!", "warning");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPressed(true);
    await dispatch(createCategory(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      setLoading(true);
      setTimeout(() => setIsPressed(false), 1000);
      if (res.status === 200) {
        notify("Category added", "success");
      } else {
        notify("Category not added", "error");
      }
    }
  }, [loading]);

  return [
    img,
    name,
    isPressed,
    loading,
    handleChange,
    onImageChange,
    handleSubmit,
  ];
};

export default useAddCategory;

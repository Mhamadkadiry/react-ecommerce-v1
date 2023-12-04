import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { getAllCategories } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { getSubcategoriesOfOneCategory } from "../../redux/actions/subcategoryAction";
import { createProduct } from "../../redux/actions/productAction";

const useAddProduct = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("Price before discount");
  const [priceAfter, setPriceAfter] = useState("Price after discount");
  const [quantity, setQuantity] = useState("Available quantity");
  const [category, setCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [brand, setBrand] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescription = (event) => {
    event.persist();
    setDescription(event.target.value);
  };
  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };
  const onChangeQuantity = (event) => {
    event.persist();
    setQuantity(event.target.value);
  };
  const onChangeColorPicker = (event) => {
    event.persist();
    setShowColorPicker(!showColorPicker);
  };
  const onChangeBrand = (event) => {
    event.persist();
    setBrand(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setColors(event.target.value);
  };
  useEffect(() => {
    if (!navigator.onLine) {
      notify("No internet connection", "error");
      return;
    }
    dispatch(getAllCategories());
    dispatch(getAllBrands());
  }, []);

  const categories = useSelector((state) => state.allCategories.categories);
  const brands = useSelector((state) => state.allBrands.brands);
  const subcat = useSelector((state) => state.allSubcategories.subcategories);

  const onSelectCategory = async (event) => {
    if (event.target.value != 0) {
      await dispatch(getSubcategoriesOfOneCategory(event.target.value));
    }
    setCategory(event.target.value);
  };

  useEffect(() => {
    if (category != 0) {
      if (subcat.data) {
        setSubcategories(subcat.data);
      }
    }
  }, [subcat]);
  const onSelectBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleOnColorChangeComplete = () => {
    if (currentColor === "") return;
    if (colors.filter((c) => c === currentColor).length > 0) {
      setShowColorPicker(!showColorPicker);
      setCurrentColor("");
      return notify("Color already exists", "warning");
    }
    setShowColorPicker(!showColorPicker);
    setColors([...colors, currentColor]);
    setCurrentColor("");
  };
  const handleChangeCurrentColor = (color) => {
    setCurrentColor(color.hex);
  };

  const rgbToHex = (rgb) => {
    let hex =
      "#" +
      rgb
        .match(/\d+/g)
        .map(function (value) {
          return ("0" + parseInt(value).toString(16)).slice(-2);
        })
        .join("");
    return hex;
  };
  const handleDeleteColor = (e) => {
    const color = rgbToHex(e.target.style.backgroundColor);
    const newColors = colors.filter((c) => c !== color);
    setColors(newColors);
  };
  const onSelect = (selectedList) => {
    setSelectedSubcategories(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubcategories(selectedList);
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0)
      return notify("Please select product images", "warning");
    if (title === "") return notify("Please enter product name", "warning");
    if (description === "")
      return notify("Please enter product description", "warning");
    if (priceAfter === "Price after discount" || priceAfter <= 0)
      return notify("Please enter product price", "warning");
    if (quantity === "Available quantity" || quantity <= 0)
      return notify("Please enter product quantity", "warning");
    if (category === "") return notify("Please select category", "warning");
    if (brand === "") return notify("Please select brand", "warning");
    if (selectedSubcategories.length === 0)
      return notify("Please select subcategories", "warning");
    const formData = new FormData();
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    const imagesArr = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => dataURLtoFile(images[index], Math.random() + ".png")
    );
    formData.append("title", title);
    formData.append("description", description);
    formData.append("priceBefore", priceBefore);
    formData.append("priceAfter", priceAfter);
    formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("imageCover", imgCover);
    imagesArr.map((item) => formData.append("images", item));
    colors.map((item) => formData.append("availableColors", item));
    selectedSubcategories.map((item) =>
      formData.append("subcategory", item._id)
    );
    setLoading(true);
    setIsPressed(true);
    await dispatch(createProduct(formData));
    setLoading(false);
    setIsPressed(false);
  };
  const products = useSelector((state) => state.allProducts.products);
  useEffect(() => {
    if (!loading) {
      setBrand("");
      setCategory("");
      setColors([]);
      setCurrentColor("");
      setDescription("");
      setImages([]);
      setPriceAfter("Price after discount");
      setPriceBefore("Price before discount");
      setQuantity("Available quantity");
      setSelectedSubcategories([]);
      setTitle("");
      setTimeout(() => setLoading(true), 1000);
      if (products) {
        if (products.status === 200) {
          notify("Product added", "success");
        } else {
          notify("Error happened while adding the product", "error");
        }
      }
    }
  }, [loading]);
  return [
    products,
    categories,
    brands,
    loading,
    isPressed,
    images,
    setImages,
    title,
    onChangeTitle,
    description,
    onChangeDescription,
    priceBefore,
    onChangePriceBefore,
    priceAfter,
    onChangePriceAfter,
    quantity,
    onChangeQuantity,
    subcategories,
    showColorPicker,
    onChangeColorPicker,
    colors,
    onSelectCategory,
    onSelectBrand,
    handleOnColorChangeComplete,
    handleChangeCurrentColor,
    handleDeleteColor,
    onSelect,
    onRemove,
    handleSubmit,
  ];
};

export default useAddProduct;

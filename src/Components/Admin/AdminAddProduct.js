import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import add from "../../Assets/add.png";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import useAddProduct from "../../Hooks/Product/useAddProduct";

const AdminAddProduct = () => {
  const [
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
  ] = useAddProduct();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new product</div>
        <Col sm="8">
          <div className="text-form pb-2">Product images</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme="light"
            max={5}
          />
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            className="input-form d-block mt-3 px-3"
            placeholder="Product name"
          />
          <textarea
            value={description}
            onChange={onChangeDescription}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product description"
          />
          <input
            value={priceBefore}
            onChange={onChangePriceBefore}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price before discount"
          />
          <input
            value={priceAfter}
            onChange={onChangePriceAfter}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product price"
          />
          <input
            value={quantity}
            onChange={onChangeQuantity}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product quantity"
          />
          <select
            name="categories"
            onChange={onSelectCategory}
            id="cat"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">Category</option>
            {categories.data ? (
              categories.data.map((category, index) => (
                <option key={index} value={category._id}>
                  {category.name}
                </option>
              ))
            ) : (
              <option value="0">
                <Spinner
                  className="d-inline mt-2"
                  animation="border"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </option>
            )}
          </select>

          <Multiselect
            className="mt-2"
            placeholder="Subcategory"
            options={subcategories}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            onChange={onSelectBrand}
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">Brand</option>
            {brands.data ? (
              brands.data.map((brand, index) => (
                <option key={index} value={brand._id}>
                  {brand.name}
                </option>
              ))
            ) : (
              <option value="0">
                <Spinner
                  className="d-inline mt-2"
                  animation="border"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </option>
            )}
          </select>
          <div className="text-form mt-3 "> Available Colors</div>
          <div className="mt-1 d-flex">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={handleDeleteColor}
                className="color ms-2 border  mt-1"
                style={{ backgroundColor: color }}
              ></div>
            ))}
            <img
              onClick={onChangeColorPicker}
              style={{ cursor: "pointer" }}
              src={add}
              alt="add"
              width="30px"
              height="35px"
              className="ms-2"
            />
            {showColorPicker ? (
              <div className="text-center rounded shadow">
                <CompactPicker onChangeComplete={handleChangeCurrentColor} />
                <p
                  className="mt-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleOnColorChangeComplete}
                >
                  <i class="fa-solid fa-pen-fancy me-1"></i> Add Color
                </p>
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          {isPressed ? (
            loading ? (
              <Spinner
                className="d-inline mt-2"
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : null
          ) : (
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
              Save
            </button>
          )}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProduct;

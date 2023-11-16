import React from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../Assets/avatar.png";
import add from "../../Assets/add.png";
const AdminAddProduct = () => {
  const onSelect = () => {};
  const onRemove = () => {};

  const options = [
    { name: "Category one", id: 1 },
    { name: "Category two", id: 2 },
  ];

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new product</div>
        <Col sm="8">
          <div className="text-form pb-2">Product images</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product name"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product description"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price before discount"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product price"
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">Category</option>
            <option value="val">Category 1</option>
            <option value="val2">Category 2</option>
            <option value="val2">Category 3</option>
            <option value="val2">Category 4</option>
          </select>

          <Multiselect
            className="mt-2"
            placeholder="Subcategory"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">Brand</option>
            <option value="val2">Brand 1</option>
            <option value="val2">Brand 2</option>
            <option value="val2">Brand 3</option>
          </select>
          <div className="text-form mt-3 "> Available Colors</div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "black" }}
            ></div>
            <img src={add} alt="add" width="30px" height="35px" className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">Save</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProduct;

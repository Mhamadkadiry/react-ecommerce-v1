import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddBrandHook from "../../Hooks/Brand/AddBrandHook";

const AdminAddBrand = () => {
  const [
    img,
    name,
    isPressed,
    loading,
    handleChange,
    onImageChange,
    handleSubmit,
  ] = AddBrandHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new brand</div>
        <Col sm="8">
          <div className="text-form pb-2">Brand image</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="avatar"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              required
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            required
            type="text"
            value={name}
            onChange={handleChange}
            className="input-form d-block mt-3 px-3"
            placeholder="Brand name"
          />
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
          )}{" "}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddBrand;

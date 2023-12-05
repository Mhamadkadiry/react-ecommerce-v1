import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "../../Hooks/Category/AddCategoryHook";

const AdminAddCategory = () => {
  const [
    img,
    name,
    isPressed,
    loading,
    handleChange,
    onImageChange,
    handleSubmit,
  ] = AddCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new category</div>
        <Col sm="8">
          <div className="text-form pb-2">Category image</div>
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
            placeholder="Add category"
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
          )}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;

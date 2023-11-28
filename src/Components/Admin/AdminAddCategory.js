import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import avatar from "../../Assets/avatar.png";
import { createCategory } from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
const AdminAddCategory = () => {
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

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    }
  }, [loading]);
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
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
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
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            Save
          </button>
        </Col>
      </Row>
      {isPressed ? (
        loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <h4>Category added</h4>
        )
      ) : null}
    </div>
  );
};

export default AdminAddCategory;

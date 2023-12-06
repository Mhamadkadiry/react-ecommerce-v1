import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubcategoryHook from "../../Hooks/Subcategory/AddSubcategoryHook";

const AdminAddSubcategory = () => {
  const [
    categories,
    loading,
    handleOnChange,
    handleSubmit,
    handleChangeName,
    name,
    isPressed,
  ] = AddSubcategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new subcategory</div>
        <Col sm="8">
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Subcategory name"
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2"
            onChange={handleOnChange}
          >
            <option value="0">Choose category</option>
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
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
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

export default AdminAddSubcategory;

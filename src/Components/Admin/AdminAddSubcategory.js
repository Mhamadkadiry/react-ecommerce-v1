import React from "react";
import { Row, Col } from "react-bootstrap";

const AdminAddSubcategory = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new subcategory</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Subcategory name"
          />
          <select name="languages" id="lang" className="select mt-3 px-2 ">
            <option value="val">Category one</option>
            <option value="val2">Category two</option>
            <option value="val2">Category three</option>
            <option value="val2">Category four</option>
          </select>
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

export default AdminAddSubcategory;

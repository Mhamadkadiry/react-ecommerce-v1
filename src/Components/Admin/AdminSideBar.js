import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar mt-5 mb-3 mt-md-0 bg-dark">
      <div className="d-flex flex-column ">
        <Link to="/admin/allorders" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center text-white">
            ORDERS
          </div>
        </Link>
        <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center text-white">
            PRODUCTS
          </div>
        </Link>
        <Link to="/admin/allbrands" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center text-white">
            BRANDS
          </div>
        </Link>
        <Link to="/admin/allcategories" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center text-white">
            CATEGORIES
          </div>
        </Link>
        <Link to="/admin/allsubcategories" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center text-white">
            SUBCATEGORIES
          </div>
        </Link>
        <Link to="/admin/addproduct" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center text-white">
            Add Product
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;

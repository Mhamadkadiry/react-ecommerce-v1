import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/admin/allorders" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            ORDERS
          </div>
        </Link>
        <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            PRODUCTS
          </div>
        </Link>

        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          BRANDS
        </div>
        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          CATEGORIES
        </div>
        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          SUBCATEGORIES
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;

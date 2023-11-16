import Footer from "./Components/Utilities/Footer";
import NavbarLogin from "./Components/Utilities/NavbarLogin";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoriesPage from "./Pages/Category/AllCategoriesPage";
import AllBrandsPage from "./Pages/Brand/AllBrandsPage";
import ExploreProductsPage from "./Pages/Product/ExploreProductsPage";
import ProductDetailsPage from "./Pages/Product/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import PaymentMethodPage from "./Pages/Checkout/PaymentMethodPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAllBrandsPage from "./Pages/Admin/AdminAllBrandsPage";
import AdminAllCategoriesPage from "./Pages/Admin/AdminAllCategoriesPage";
import AdminAllSubcategoriesPage from "./Pages/Admin/AdminAllSubcategoriesPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserAllAddressesPage from "./Pages/User/UserAllAddressesPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategories" element={<AllCategoriesPage />} />
          <Route path="/allbrands" element={<AllBrandsPage />} />
          <Route path="/products" element={<ExploreProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethod" element={<PaymentMethodPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/allbrands" element={<AdminAllBrandsPage />} />
          <Route
            path="/admin/allcategories"
            element={<AdminAllCategoriesPage />}
          />
          <Route
            path="/admin/allsubcategories"
            element={<AdminAllSubcategoriesPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route
            path="/user/favoriteproducts"
            element={<UserFavoriteProductsPage />}
          />
          <Route path="/user/addresses" element={<UserAllAddressesPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

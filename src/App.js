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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

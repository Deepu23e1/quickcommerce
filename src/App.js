// import Category from "./components/admin/category/Category";
// import DisplayAllCategory from "./components/admin/category/DisplayAllCategory";
// import Subcategory from "./components/admin/category/Subcategory";
// import DisplayAllsubCategory from "./components/admin/category/DisplayAllsubCategory";
//  import Brand from "./components/admin/category/Brand";
//  import DisplayAllBrand from "./components/admin/category/DisplayAllBrand";
//  import Product from "./components/admin/category/Product";
//  import DisplayAllProduct from "./components/admin/category/DisplayAllProduct";

//  import ProductDetail from "./components/admin/category/ProductDetail";

//  import DisplayAllProductDetail from "./components/admin/category/DisplayAllProductDetail";
// import ProductPicture from "./components/admin/category/ProductPicture";
// import Mainbanner from "./components/admin/category/Mainbanner";
// import Bankandotheroffers from "./components/admin/category/Bankandotheroffers";
// import Adoffer from "./components/admin/category/Adoffers";
import  AdminLogin from "./components/admin/adminlogin/AdminLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/adminlogin/Dashboard";
import HomePage from './components/userinterface/homepage/HomePage';
//import PageCategoryDisplay from "./components/userinterface/homepage/PageCategoryDisplay";
import SignInCard from "./components/userinterface/homepage/Signup";
import Verification from "./components/userinterface/homepage/Verification";
import AddCart from "./components/userinterface/homepage/AddCart";
import PageCategoryDisplay from "./components/userinterface/pagedisplay/PageCategoryDisplay";
import ProductDetailPage from "./components/userinterface/productdetailspage/ProductDetailPage"
import CartDisplayPage from "./components/userinterface/mycart/CartDisplayPage"
import Login from "./components/userinterface/signin/Login";
import Otp from "./components/userinterface/signin/Otp";
import SetUp from "./components/userinterface/signin/SetUp";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route element={<Category />} path="/category" />
          {/* <Route element={<DisplayAllCategory />} path="/displayallcategory" />
          <Route element={<Subcategory />} path="/subcategory" />
          <Route element={<DisplayAllsubCategory />} path="/displayallsubcategory" />
          <Route element={<Brand />} path="/Brand" />
          <Route element={<DisplayAllBrand />} path="/displayallbrands" />
           <Route element={<Product/>} path="/product" />
        <Route element={<DisplayAllProduct />} path="/displayallproducts" />
        <Route element={<ProductDetail />} path="/productdetail" /> 
          <Route element={<DisplayAllProductDetail />} path="/displayallproductdetail" />
          <Route element={<ProductPicture />} path="/productpicture" />
          <Route element={<Mainbanner />} path="/mainbanner" />
          <Route element={<Bankandotheroffers />} path="/bankoffers" />
          <Route element={<Adoffer />} path="/adoffers" /> */} 
          <Route element={<AdminLogin />} path="/adminlogin"></Route>
          <Route element={<Dashboard />} path="/dashboard/*"></Route>
          <Route element={<HomePage />} path="/home"></Route>
          <Route element={<PageCategoryDisplay />} path="/show"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Verification />} path="/verify"></Route>
          <Route element={<AddCart />} path="/adcard"></Route>
          <Route element={<PageCategoryDisplay />} path="/pagecategorydisplay"></Route>
          <Route element={<ProductDetailPage/>} path="/productdetailpage"></Route> 
          <Route element={<CartDisplayPage/>} path="/cartdisplaypage"></Route>
          <Route element={<Otp />} path="/otp"></Route>
          <Route element={<SetUp />} path="/setup"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
          
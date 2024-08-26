import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import { Route, Routes } from 'react-router-dom'
import Home from "./pg/Home/Home";
import Cart from "./pg/Cart/Cart";
import PlaceOrder from "./pg/PlaceOrder/PlaceOrder";
import Header from "./components/Header/Header";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

  const[showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      ,
      <Footer />
    </>
  );
};

export default App;

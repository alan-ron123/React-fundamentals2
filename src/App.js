import React from "react";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import More from "./components/pages/More";
import Cart from "./components/pages/cartPage/Cart";
import Login from "./components/AuthPages/Login";
import Signup from "./components/AuthPages/Signup";
import Homeproducts from "./components/productPages/Homeproducts";
import Electronics from "./components/productPages/Electronics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/more" element={<More />}>
            <Route path="homeproducts" element={<Homeproducts />}></Route>
          </Route>
          <Route path="/more/electronics" element={<Electronics />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<h1>page not found</h1>}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./Register";

export default function Protectedroutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

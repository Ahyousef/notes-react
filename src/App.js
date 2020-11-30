import React from "react";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Products from "./components/products";
import Categories from "./components/categories";
import ActiveCategory from "./components/active-category";
import SimpleCart from "./components/simple-cart";

import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <Categories />
      <ActiveCategory />
      <Products />
      <Footer />
    </>
  );
}

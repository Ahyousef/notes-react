import React from "react";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Products from "./components/products";
import Categories from "./components/categories";
import ActiveCategory from "./components/active-category";

import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Categories />
      <ActiveCategory />
      <Products />
      <Footer />
    </>
  );
}

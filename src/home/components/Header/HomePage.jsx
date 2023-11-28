import React from "react";
import { Header } from "../components/Header/Header";
import { HeaderSearch } from "../components/Header/HeaderSearch";
import Footer from "../../ui/Footer/Footer";
import { HeaderRegisterRest } from "../components/Header/HeaderRegisterRest";
import Home from "../components/cards/Home";
import Categories from "../components/Categorias/Categories";

export const HomePage = () => {
  return (
    <>
      <HeaderRegisterRest />
      <Header />
      <HeaderSearch />
      <Categories />
      <Home />
      <Footer />
    </>
  );
};

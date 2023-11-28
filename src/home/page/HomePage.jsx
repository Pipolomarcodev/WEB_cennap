import Footer from "../../ui/Footer/Footer";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { HeaderRegisterRest } from "../components/Header/HeaderRegisterRest";
import { HeaderSearch } from "../components/Header/Headersearch";
import Home from "../components/cards/Home";
import FoodTypes from "../components/foodtypes/FoodTypes";

export const HomePage = () => {
  const { page } = useParams();
  const pageNumber = parseInt(page, 10) || 1;

  return (
    <>
       <HeaderRegisterRest />
      <Header />
      <HeaderSearch />
      <FoodTypes />
      <Home page={pageNumber} />
      <Footer />
    </>
  );
};

import Footer from "../../ui/Footer/Footer";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { HeaderRegisterRest } from "../components/Header/HeaderRegisterRest";
import { HeaderSearch } from "../components/Header/Headersearch";
import Home from "../components/cards/Home";
import FoodTypes from "../components/foodtypes/FoodTypes";
import { useAuth } from "../../context/AuthContext";
import { images } from "../../constants";
import { GoldenLine } from "../../ui/LineGold/GoldenLine";



export const HomePage = () => {
  const { page } = useParams();
  const pageNumber = parseInt(page, 10) || 1;
  const { user } = useAuth();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "100vw",
          height: "290px",
          backgroundImage: `url(${images.xl})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          zIndex: -1,
        }}
        >
        </div>
      {!user? <HeaderRegisterRest /> : ""}
      <Header />
      <HeaderSearch />
    
      <FoodTypes />
      <Home page={pageNumber} />
      <Footer />
    </>
  );
};

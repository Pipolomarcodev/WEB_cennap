import images from "../../../constants/images";
import "./headerSearch.css";
import { GoldenLine } from "../../../ui/LineGold/GoldenLine";

export const HeaderSearch = () => {
  return (
    <div className="header header-background">
      <div className="field has-addons search-main">
        <div className="control search-selects">
          <div className="margin is-white">
            <span className="cat-logo">
              <img src={images.location} alt="" className="location-logo" />
            </span>
            <select className="search-select ">
              <option className="da">Ubicacion</option>
            </select>
          </div>
          <div className="margin is-white">
            <span className="cat-logo">
              <img src={images.date} alt="" className="date-logo" />
            </span>
            <select className="search-select ">
              <option>Fecha</option>
            </select>
          </div>
          <div className=" margin is-white">
            <span className="cat-logo">
              <img src={images.cupcake} alt="" className="cupcake-logo" />
            </span>
            <select className="search-select ">
              <option>Cocina</option>
            </select>
          </div>
        </div>
        <div className="control margin ">
          <input
            className="input search-text is-static no-animation"
            type="text"
            placeholder="Buscar por nombre"
          />
        </div>
        <p className="control search-logo">
          <a className="button is-static ">
            <img src={images.spin} alt="image-ping" />
          </a>
        </p>
      </div>
      <GoldenLine />
    </div>
  );
};

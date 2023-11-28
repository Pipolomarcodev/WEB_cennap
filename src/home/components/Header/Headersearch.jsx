import { Svg } from "../../../assets/svg-header/Svg";
import "./headerSerch.css";

export const HeaderSearch = () => {
  return (
    <div className=" header header-background">
      <h2 className="header-text-search">Donde Disfrutar Ese Momento</h2>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Busque su restaurant"
        />
        <button className="searchButton" href="#">
          <Svg />
        </button>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import "../Header/headerRegisterRest.css";

export const HeaderRegisterRest = () => {
  return (
    <div className="line">
    <div className="link-rest">
      <Link to={"/admin/form"}>Registra tu Restaurante </Link>
    </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import "../Header/headerRegisterRest.css";

export const HeaderRegisterRest = () => {
  return (
    <div className="link-rest">
      <Link to={"/admin/form"}>Registra Tu Restaurant </Link>
      <a href="">Ayuda ?</a>
    </div>
  );
};

import styles from "./adminsidebar.module.css";
import plusicon from "./svg/plus.svg";
import outicon from "./svg/out.svg";
import userIcon from "./svg/user.svg";
import resticon from "./svg/rest.svg";
import colabIcon from "./svg/colab.svg";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router-dom";

/**************************************************************/
/***************  CLIENT ADMIN SIDEBAR COMPONENT **************/
/**************************************************************/

const AdminSideBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sideBar}>
      {/* ------------------  USER PROFILE ---------------- */}
      <div className={styles.userProContainer}>
        <UserProfile />
      </div>

      {/* ------------------  SIDEBAR ADMIN PANEL ---------------- */}

      <button className={styles.newRestButton} tabIndex="0">
        <img className={styles.plusIcon} src={plusicon} alt="" />
        Nuevo restaurante
      </button>
      <button className={styles.myRestButton} tabIndex="0">
        <img className={styles.restIcon} src={resticon} alt="" />
        Mis restaurantes
      </button>
      <button className={styles.myColabButton} tabIndex="0">
        <img className={styles.colabIcon} src={colabIcon} alt="" />
        Colaboradores
      </button>

      <button className={styles.configButton} tabIndex="0">
        <img className={styles.userIcon} src={userIcon} alt="" />
        Administrador
      </button>
      <button
        onClick={() => navigate("/")}
        className={styles.logOutButton}
        tabIndex="0"
      >
        <img className={styles.outIcon} src={outicon} alt="" />
        Cerrar sesión
      </button>
    </div>
  );
};

export default AdminSideBar;

import styles from "./adminsidebar.module.css";
import plusicon from "./svg/plus.svg";
import outicon from "./svg/out.svg";
import userIcon from "./svg/user.svg";
import resticon from "./svg/rest.svg";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";


const AdminSideBar = ({openModal}) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };


  return (
    <div className={styles.sideBar}>
      {/* ------------------  USER PROFILE ---------------- */}
      <div className={styles.userProContainer}>
        <UserProfile />
      </div>

      {/* ------------------  SIDEBAR ADMIN PANEL ---------------- */}

      <button className={styles.newRestButton} tabIndex="0" onClick={openModal()}>
        <img className={styles.plusIcon} src={plusicon} alt="" />
        Nuevo restaurante
      </button>
 
      <button
        onClick={() => navigate("/admin/admin-profile")}
        className={styles.configButton}
        tabIndex="0"
      >
        <img className={styles.userIcon} src={userIcon} alt="" />
        Administrador
      </button>
      <button
        onClick={handleLogout}
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

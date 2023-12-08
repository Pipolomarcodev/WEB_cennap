import styles from "./usersidebar.module.css";

import outicon from "./svg/out.svg";
import reservicon from "./svg/reserva.svg";
import staricon from "./svg/star.svg";
import usericon from "./svg/user.svg";
import UserProfile from "./UsersProfile";
import { useNavigate } from "react-router-dom";

const UserSideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const shouldLogout = window.confirm("Quires cerrar la session");
    if (shouldLogout) {
      // Perform logout action
      navigate("/");
    }
  };
  return (
    <div className={styles.sideBar}>
      <div className={styles.userProContainer}>
        <UserProfile />
      </div>

      <button
        onClick={() => navigate("/user/user-panel")}
        className={styles.reserButton}
        tabIndex="0"
      >
        <img className={styles.reservIcon} src={reservicon} alt="" />
        Mis reservas
      </button>

      <button
        onClick={() => navigate("/user/user-favorite")}
        className={styles.favoritesButton}
        tabIndex="0"
      >
        <img className={styles.starIcon} src={staricon} alt="" />
        Mis favoritos
      </button>

      <button
        onClick={() => navigate("/user/user-profile")}
        className={styles.profileButton}
        tabIndex="0"
      >
        <img className={styles.profileIcon} src={usericon} alt="" />
        Perfil
      </button>
      <button
        onClick={() => navigate("/")}
        className={styles.favoritesButton}
        tabIndex="0"
      >
        <img className={styles.starIcon} src={staricon} alt="" />
        Home
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

export default UserSideBar;

import styles from "./usersidebar.module.css";
import searchicon from "./svg/lupa.svg";
import outicon from "./svg/out.svg";
import reservicon from "./svg/reserva.svg";
import staricon from "./svg/star.svg";
import usericon from "./svg/user.svg";
import UserProfile from "./UsersProfile";

/**************************************************************/
/***************  CLIENT ADMIN SIDEBAR COMPONENT **************/
/**************************************************************/

const UserSideBar = () => {
  return (
    <div className={styles.sideBar}>
      {/* ------------------  USER PROFILE ---------------- */}
      <div className={styles.userProContainer}>
        <UserProfile />
      </div>

      {/* --------------  SIDEBAR ADMIN PANEL ---------------- */}

      <button className={styles.searchButton} tabIndex="0">
        <img className={styles.searchIcon} src={searchicon} alt="" />
        Buscar restaurante
      </button>
      <button className={styles.reserButton} tabIndex="0">
        <img className={styles.reservIcon} src={reservicon} alt="" />
        Mis reservas
      </button>

      <button className={styles.favoritesButton} tabIndex="0">
        <img className={styles.starIcon} src={staricon} alt="" />
        Mis favoritos
      </button>

      <button className={styles.profileButton} tabIndex="0">
        <img className={styles.profileIcon} src={usericon} alt="" />
        Usuario
      </button>
      <button className={styles.logOutButton} tabIndex="0">
        <img className={styles.outIcon} src={outicon} alt="" />
        Cerrar sesión
      </button>
    </div>
  );
};

export default UserSideBar;

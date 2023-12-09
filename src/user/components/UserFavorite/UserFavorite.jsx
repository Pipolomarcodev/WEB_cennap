import cenappLogoM from "../UserControlPanel/svg/cenManagerLogoBlack.svg";

import styles from "../UserControlPanel/userscreen.module.css";
import "./tabla.css";

import { UserFavoriteItem } from "./UserFavoriteItem";
import UserSideBar from "../UserControlPanel/UserSideBar";

const UserFavorite = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.background}>
        <div className={styles.titleLogoContainer}>
          <h1 className={styles.title}>Mis Favoritos</h1>

          <div className={styles.logoContainer}>
            <img className={styles.logo} src={cenappLogoM} alt="Manager-Logo" />
          </div>
        </div>
        <div className="table">
          <div className="table-title">
            <div className="tables__data">
              <strong>Restaurante</strong>
            </div>
            <div className="tables__data">
              <strong>Comida</strong>
            </div>
            <div className="tables__data">
              <strong>telefono</strong>
            </div>
            <div className="tables__data">
              <strong>ciudad</strong>
            </div>
            <div className="tables__data">
              <strong>calle</strong>
            </div>
          </div>

          <UserFavoriteItem />
        </div>
        <div className={styles.contentContainer}>
          <UserSideBar />
        </div>
      </div>
    </div>
  );
};

export default UserFavorite;

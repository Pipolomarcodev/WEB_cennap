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

        <table className="tables-fav">
          <thead className="tables__thead">
            <tr>
              <th className="tables__th">Restaurante</th>
              <th className="tables__th">Comida</th>
              <th className="tables__th">telefono</th>
              <th className="tables__th">ciudad</th>
              <th className="tables__th">calle</th>
            </tr>
          </thead>
          <UserFavoriteItem />
        </table>

        <div className={styles.contentContainer}>
          <UserSideBar />
        </div>
      </div>
    </div>
  );
};

export default UserFavorite;

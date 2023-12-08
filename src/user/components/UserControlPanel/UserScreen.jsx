import { UseItemRegister } from "./UseItemRegister";
import AdminSideBar from "./UserSideBar";
import cenappLogoM from "./svg/cenManagerLogoBlack.svg";
import "./tablas.css";
import styles from "./userscreen.module.css";

const UserScreen = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.background}>
        <div className={styles.titleLogoContainer}>
          <h1 className={styles.title}>Mis Reservas</h1>

          <div className={styles.logoContainer}>
            <img className={styles.logo} src={cenappLogoM} alt="Manager-Logo" />
          </div>
        </div>

        <table className="tables-fav">
          <thead className="tables__thead">
            <tr>
              <th className="tables__th">Restaurante</th>
              <th className="tables__th">Hora</th>
              <th className="tables__th">Fecha</th>
            </tr>
          </thead>
          <UseItemRegister />
        </table>

        <div className={styles.contentContainer}>
          <AdminSideBar />
        </div>
      </div>
    </div>
  );
};

export default UserScreen;

import AdminSideBar from "./UserSideBar";
import cenappLogoM from "./svg/cenManagerLogoBlack.svg";

import styles from "./userscreen.module.css";
import DataBar from "./DataBar";

/**************************************************************/
/************  ADMIN CONTROL PANEL CLIENT SCREEN  *************/
/**************************************************************/

const UserScreen = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.background}>
        <div className={styles.titleLogoContainer}>
          <h1 className={styles.title}>Mis Reservas</h1>
          {/******************  LOGO *************************/}
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={cenappLogoM} alt="Manager-Logo" />
          </div>
        </div>
        {/****************  HEADER TABLE ********************/}
        <div className={styles.tableContainer}>
          <table className={styles.transparentTable}>
            <thead className={styles.headerTable}>
              <tr>
                <th>id</th>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Restaurante</th>
                <th>Realizada</th>
                <th>Prevista</th>
                <th>Tipo mesa</th>
                <th>Estado</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className={styles.contentContainer}>
          <AdminSideBar />
        </div>
      </div>
    </div>
  );
};

export default UserScreen;

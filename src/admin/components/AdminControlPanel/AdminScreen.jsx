import AdminSideBar from "./AdminSideBar";
import cenappLogoM from "./svg/cenManagerLogoBlack.svg";
import BarData from "./DataBarHelper";
import styles from "./adminscreen.module.css";
import DataBar from "./DataBar";

/**************************************************************/
/************  ADMIN CONTROL PANEL CLIENT SCREEN  *************/
/**************************************************************/

const AdminScreen = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.background}>
        <div className={styles.titleLogoContainer}>
          <h1 className={styles.title}>Mis Restaurantes</h1>
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
                <th>País</th>
                <th>Tipo de Cocina</th>
                <th>Teléfono</th>
                <th>Estado</th>
              </tr>
            </thead>
          </table>
        </div>
        {/**************  DATA CONTAINER  ********************/}
        <div className={styles.barsContainer}>
          <div className={styles.dataContainer}>
            {/* PRINT DATABARS INTO THE WORK SPACE CONTROL PANEL */}

            {BarData().map((category, index) => (
              <DataBar
                key={index}
                id={category.id}
                src={category.src}
                nombre={category.nombre}
                pais={category.pais}
                tipoCocina={category.tipoCocina}
                telefono={category.telefono}
                estado={category.estado}
              />
            ))}
          </div>
        </div>
      </div>

      {/*************** SIDE BAR ADMIN PANEL***************/}
      <div className={styles.contentContainer}>
        <AdminSideBar />
      </div>
    </div>
  );
};

export default AdminScreen;

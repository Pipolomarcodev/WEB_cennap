import AdminSideBar from "./AdminSideBar";
import cenappLogoM from "./svg/cenManagerLogoBlack.svg";
import BarData from "./DataBarHelper";
import styles from "./adminscreen.module.css";
import DataBar from "./DataBar";
import { useEffect, useState } from "react";
import { findAll } from "../../../service/useAdmin";
import { images } from "../../../constants";

/**************************************************************/
/************  ADMIN CONTROL PANEL CLIENT SCREEN  *************/
/**************************************************************/

const AdminScreen = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await findAll();
        console.log(data);
        setRestaurantes(data); // Supongo que la respuesta es un array de restaurantes
      } catch (error) {
        console.error("Error al cargar los restaurantes:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.appContainer}>
      <div className={styles.background}>
        <div className={styles.titleLogoContainer}>
          <h1 className={styles.title}>Mis Restaurantes</h1>

          <div className={styles.logoContainer}>
            <img className={styles.logo} src={cenappLogoM} alt="Manager-Logo" />
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.transparentTable}>
            <thead className={styles.headerTable}>
              <tr>
                <th>id</th>
                <th>imagen</th>
                <th>Nombre</th>
                <th>País</th>
                <th>Tipo de Cocina</th>
                <th>Teléfono</th>
                <th>Estado</th>
              </tr>
            </thead>
          </table>
        </div>
  
        <div className={styles.barsContainer}>
          <div className={styles.dataContainer}>
            

            {restaurantes.map((category, index) => (
              <DataBar
                key={index}
                id={category.id_restaurant}
                src={images.logoElTioBistro}
                nombre={category.name}
                pais={category.address}
                tipoCocina={category.category.name}
                telefono={category.phone}
                estado={category.active}

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

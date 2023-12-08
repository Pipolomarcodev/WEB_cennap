import AdminSideBar from "./AdminSideBar";
import cenappLogoM from "./svg/cenManagerLogoBlack.svg";
import styles from "./adminscreen.module.css";
import DataBar from "./DataBar";
import RestaurantModal from "./RestaurantModal";
import CreateRestaurant from "./CreateRestaurant";
import { useState, useEffect } from "react";
import { images } from "../../../constants";
import { useAdmin } from "../../hook/useAdmin";
import { useAuth } from "../../../context/AuthContext";

const AdminScreen = () => {
  const { restaurantes, restLoading } = useAdmin();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleCreate, setModalVisibleCreate] = useState(false);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null); // Nuevo estado
  const { user } = useAuth();

  const handleSelectRestaurant = (id) => {
    setSelectedRestaurantId(id);
  };


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModalCreate = () => {
    setModalVisibleCreate(true);
  };

  const closeModalCreate = () => {
    setModalVisibleCreate(false);
  };

  return (
    <div className={styles.appContainer}>
      {modalVisible ? <RestaurantModal closeModal={() => closeModal} restid={selectedRestaurantId} /> : ""}
      {modalVisibleCreate ? (
        <CreateRestaurant closeModal={() => closeModalCreate} />
      ) : (
        ""
      )}
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
            {restLoading && (
              <div className="modal-overlay-r">
                <div className="loader-cont">
                  <img src={images.logoInsolate} alt="" className="loader-r" />
                </div>
              </div>
            )}

            {!restLoading && restaurantes.length > 0 && (
              <>
                {restaurantes.map((category, index) => (
                  <DataBar
                    openModal={() => openModal}
                    closeModal={() => closeModal}
                    key={index}
                    id={category.id_restaurant}
                    src={images.logoInsolate}
                    nombre={category.name}
                    pais={category.address}
                    tipoCocina={category.foodTypes[0].name}
                    telefono={category.phone}
                    estado={category.active}
                    restaurant={category}
                    selected={category.id_restaurant === selectedRestaurantId} // Nuevo prop
                    onSelect={handleSelectRestaurant} // Nuevo prop
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/*************** SIDE BAR ADMIN PANEL***************/}
      <div className={styles.contentContainer}>
        <AdminSideBar openModal={() => openModalCreate} />
      </div>
    </div>
  );
};

export default AdminScreen;

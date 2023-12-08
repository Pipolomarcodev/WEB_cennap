import styles from "./databar.module.css";
import editIcon from "./svg/edit.svg";
import deleteIcon from "./svg/delete.svg";
import detailIcon from "./svg/details.svg";
import { useState } from "react";
import { useAdmin } from "../../hook/useAdmin";

const DataBar = ({
  id,
  nombre,
  src,
  pais,
  tipoCocina,
  telefono,
  estado,
  openModal,
  selected,
  onSelect,
}) => {
  const { handlerRemoveUser } = useAdmin();

  const handleCheckboxChange = () => {
    onSelect(id);
  };

  return (
    <div>
      <div className={styles.barContainer} tabIndex="0">
        {/* ------------------  DATA BAR ---------------- */}
        <div className={styles.transparentTableBar}>
          <div className={styles.headerTableBar}>
            <div>{id}</div>
            <div className={styles.logoContainer}>
              <img src={src} alt="rest-logo" />
            </div>
            <div>{nombre}</div>
            <div>{pais}</div>
            <div>{tipoCocina}</div>
            <div>{telefono}</div>
            <div>{estado}</div>
            <div>
              <input
                type="checkbox"
                tabIndex="0"
                onChange={handleCheckboxChange}
                checked={selected}
              />
            </div>
          </div>
          <div>
            {selected && (
              <div className={styles.buttonsContainer}>
                <button
                  className={styles.editButton}
                  tabIndex="0"
                  onClick={openModal()}
                >
                  <img className={styles.editIcon} src={editIcon} alt="" />
                  Editar
                </button>

                <button
                  type="submit"
                  className={styles.deleteButton}
                  onClick={() => handlerRemoveUser(id)}
                  tabIndex="0"
                >
                  <img className={styles.deleteIcon} src={deleteIcon} alt="" />
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBar;

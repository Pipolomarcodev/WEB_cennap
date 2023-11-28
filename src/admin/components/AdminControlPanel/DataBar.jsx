import styles from "./databar.module.css";
import cancelIcon from "./svg/cancel.svg";
import editIcon from "./svg/edit.svg";
import deleteIcon from "./svg/delete.svg";
import detailIcon from "./svg/details.svg";
import { useState } from "react";

/**************************************************************/
/********************  DATABAR COMPONENT **********************/
/**************************************************************/

const DataBar = ({ id, nombre, src, pais, tipoCocina, telefono, estado }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleCheckboxChange = () => {
    setShowButtons(!showButtons);
  };

  return (
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
            />
          </div>
        </div>
      </div>

      {/* ------------------  EDIT BUTTONS ---------------- */}
      {showButtons && (
        <div className={styles.buttonsContainer}>
          {showButtons ? (
            <div
              className="buttonsContainer"
              style={{
                position: "fixed",
                bottom: -350,
                left: 570,
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                transition: "opacity 2s linear, transform 2s linear",
              }}
            >
              <button className={styles.editButton} tabIndex="0">
                <img className={styles.editIcon} src={editIcon} alt="" />
                Editar
              </button>

              <button className={styles.deleteButton} tabIndex="0">
                <img className={styles.deleteIcon} src={deleteIcon} alt="" />
                Eliminar
              </button>

              <button className={styles.detailButton} tabIndex="0">
                <img className={styles.deletailIcon} src={detailIcon} alt="" />
                Detalles
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default DataBar;

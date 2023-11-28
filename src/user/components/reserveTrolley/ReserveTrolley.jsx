import { useContext, useState } from "react";
import { icons } from "../../../constants";
import "./reservetrolley.css";
import { UserContext } from "../../../context/UserContext";

export const ReserveTrolley = () => {
  const { cartItems } = useContext(UserContext);
  const [config, setConfig] = useState(false);
  const toggleNavConf = () => {
    setConfig(!config);
  };

  return (
    <div className="reserve-container">
      <img
        className="reserve-img"
        src={icons.reserva}
        alt=""
        onClick={toggleNavConf}
      />

      {config && (
        <>
          <div className="reserve-table">
            <table>
              <thead className="reserve-card-top">
                <tr>
                  <th>Restaurante</th>
                  <th>Hora</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              {cartItems.length <= 0 ? (
                <>
                  <h1 className="text-center">No tienes ninguna Reserva</h1>
                </>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <tbody key={item.product.id} className="reserve-card">
                      <tr>
                        <td>{item.product.name}</td>
                        <td>12:30pm</td>
                        <td>1/2/2023</td>
                        <td>
                          <button>Ver tus reservas</button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </>
              )}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

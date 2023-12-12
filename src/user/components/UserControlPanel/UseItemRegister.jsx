import "./tablas.css";

import { useState } from "react";
import { useEffect } from "react";
import BaseUrl from "../../../constants/BaseUrl";

export const UseItemRegister = () => {
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);
    const userId = userData.id;
    console.log(userId);
    fetch(`${BaseUrl}/v1/api/reservations/user/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setReserves(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []); // <-- Añadí un a

  console.log(reserves);
  return (
    <>
      <tbody className="tables__tbody">
        {reserves.map((restaunt, index) => (
          <tr key={index} className="tables__tr">
            <td className="tables__td">{restaunt.restaurantId}</td>
            <td className="tables__td">{restaunt.arrival_time}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

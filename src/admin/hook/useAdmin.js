import { findAll, remove } from "../../service/adminService";
import { useEffect, useState } from "react";

export const useAdmin = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [restLoading, setRestLoading] = useState(true);

  useEffect(() => {
    setRestLoading(true)
    const fetchData = async () => {
      try {
        const data = await findAll();

        setRestaurantes(data);
      } catch (error) {
        console.error("Error al cargar los restaurantes:", error);
      } finally {
        setRestLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlerRemoveUser = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "¿Estás seguro de que quieres eliminar este restaurante?"
      );

      if (confirmDelete) {
        const token = localStorage.getItem("token");
        await remove(id, token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    restLoading,
    restaurantes,
    handlerRemoveUser,
  };
};

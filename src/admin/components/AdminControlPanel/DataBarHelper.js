/**************************************************************/
/*******************  DATA HELPER BAR  ************************/
/**************************************************************/
import { images } from "../../../constants";

const barHelper = () => {
  return [
    {
      id: 1,
      src: images.logoElTioBistro,
      nombre: "Tio Bistró",
      pais: "Uruguay",
      tipoCocina: "Carnes",
      telefono: "+598 98234567",
      estado: "Activo",
    },
    {
      id: 2,
      src: images.logoElTioBistro,
      nombre: "Tio Bistró Buceo",
      pais: "Uruguay",
      tipoCocina: "Mexicana",
      telefono: "+598 98235277",
      estado: "inactivo",
    },
  ];
};
export default barHelper;

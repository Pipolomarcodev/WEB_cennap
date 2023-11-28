/**************************************************************/
/*******************  DATA HELPER MINICARD ********************/
/**************************************************************/
import { imagesHoodtypes } from "../../../constants";

const cardHelper = () => {
  return [
    { title: "Cafe", src: imagesHoodtypes.comidaCafe },
    { title: "Carnes", src: imagesHoodtypes.comidaCarnes },
    { title: "China", src: imagesHoodtypes.comidaChina },
    {
      title: "Italiana",
      src: imagesHoodtypes.comidaItaliana,
    },
    {
      title: "Mariscos",
      src: imagesHoodtypes.comidaMariscos,
    },
    {
      title: "Mejicana",
      src: imagesHoodtypes.comidaMejicana,
    },
    { title: "Brunch", src: imagesHoodtypes.comidaBrounches },
    {
      title: "Colombiana",
      src: imagesHoodtypes.comidaColombiana,
    },
    { title: "Chilena", src: imagesHoodtypes.comidaChilena },
    {
      title: "Brasileña",
      src: imagesHoodtypes.comidaBrasilera,
    },
    { title: "Hindú", src: imagesHoodtypes.comidaHindu },
    { title: "Peruana", src: imagesHoodtypes.comidaPeruana },
  ];
};
export default cardHelper;

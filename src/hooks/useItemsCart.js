import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";

const inititalCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    dispatch({
      type: "AddProductCart",
      payload: product,
    });
  };

  const handlerDeleteProductCart = (id) => {
    dispatch({
      type: "DeleteProductCart",
      payload: id,
    });
  };

  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  };
};

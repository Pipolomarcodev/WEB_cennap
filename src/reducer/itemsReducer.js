export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "AddProductCart":
      return [
        ...state,
        {
          product: action.payload,
        },
      ];

    case "DeleteProductCart":
      return state.filter((i) => i.product.id !== action.payload);

    default:
      return state;
  }
};

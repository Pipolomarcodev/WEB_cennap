export const adminReducer = (state = [], action) => {
  switch (action.type) {
    case "removeUser":
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

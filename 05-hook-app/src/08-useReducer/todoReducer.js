export const todoReducer = (initiState, action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("El action.type = 'ABC' no esta implementado");

    default:
      return initialState;
  }
};

export const todoReducer = (initiState, action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      throw new Error(
        "El action.type = '[TODO] Add todo' no esta implementado"
      );

    default:
      return initialState;
  }
};

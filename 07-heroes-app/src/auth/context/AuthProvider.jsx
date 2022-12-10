import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext, authReducer } from "./";

/* const estadoInicial = { ya no lo usamos en el useReducer porque ya hace el mismo trabajo el init
  logged: false,
}; */

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  /* console.log(!!user); forma alternativa */
  return {
    logged: Boolean(user),
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  //Aca podriamos crear nuestro reducer quien es el que va a manejar los estados pero tambien podemos usar un useState
  const [authState, authDispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = {
      id: "abc",
      name: name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    authDispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");

    const action = { type: types.logout };

    authDispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

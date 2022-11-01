import { UserContext } from "./UserContext";

//A diferencia de los componentes funcionales, los Provider reciben children opcionalmente/hijos que este componente va a tener
//Para usarlo debemos ponerlo en el nivel mas alto de nuestro arbol asi los children puedan acceder a su info
export const UserProvider = ({ childen }) => {
  return (
    //Aca declaramos que nuestro HOC es quien provee todo la informacion al context que quiero proporcionarle a todo el arbol de componentes
    <UserContext.Provider value={null}>
      {/* este obj es la info que va a tener a dispocision cualquier hijo en nuestro arbol de componentes en este contexto */}
      {childen}
    </UserContext.Provider>
  );
};

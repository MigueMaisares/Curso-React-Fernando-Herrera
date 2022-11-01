//UserContext es un componente de React, parecido al BrowserRouter

import { createContext } from "react";

//un context es un HOC              este valor sera el que se comparte/expone en el contexto de los componentes hijos que quieran tomar esta info
export const UserContext = createContext();
//1er objetivo: Nos permite a nosotros saber como luce la informacion que vamos a colocar aca
//2do objetivo: Nos va a servir para que nuestro hook de React busque este contexto
//3er objetivo: Para definir el proveedor

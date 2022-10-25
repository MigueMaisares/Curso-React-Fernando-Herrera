import React from "react";
//El metodo memo memoriza el componente que recibe, como consecuencia no se renderiza por el cambio de otras props en el componente padre
export const Small = React.memo(({ value }) => {
  console.log("Me dibuje :c");
  return <small>{value}</small>;
});

import React from "react";

//      Si aca uso React.memo() en este componente ShowIncrement, no podra memorizarlo porque las funciones cada vez que se renderizan, apuntan a espacios de memoria distintas
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a generar :c");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});

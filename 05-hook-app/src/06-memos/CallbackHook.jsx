import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  //Las funciones y los objetos en JS siempre apuntan a posiciones de memoria diferente
  //Cada vez que el comp CallbackHook se renderize, enviara distintos incrementos entre si
  const [counter, setCounter] = useState(10);

  //Memoriza funciones y devuelve otra funcion memorizada en el mismo espacio de memoria
  const increment = useCallback(
    //esta callback tiene que ser la misma que se manda a llamar, es como su definicion dentro de este hook
    (value) => {
      //esta instruccion es explicita, si fuerea setCounter(counter + 1) quedaria siempre en el mismo valor
      setCounter((counter) => counter + value);
    },
    []
  );

  /* const incremento = () => {
    setCounter(counter + 1);
  }; */
  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};

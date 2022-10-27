import { Hijo } from "./Hijo";
import { useCallback, useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  //Aca podemos usar el useCallback porque mandamos esta funcion al Hijo sin memorizar ni tampoco el estado quien hace reenderizaciones innecesariasx5
  const incrementar = useCallback((num) => {
    setValor((valor) => valor + num); //para este hook hay que manipular el estado de manera explicita devolviendo un nuevo estado (valor) => valor + num y NO MUTANDOLO (valor+num)
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};

import { useState } from "react";

export const CounterApp = ({ valor }) => {
  //cuando CAMBIA EL ESTADO TODO EL COMPONENTE SE REENDERIZA
  const [counter, setCounter] = useState(valor);

  const handleAdd = () => {
    /* setCounter(counter + 1); */
    setCounter((c) => c + 1); //c es el valor del estado que recibe la callback en setCounter
  };
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(valor);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>{counter}</p>
      {/* Cuando se hace click en el handle y este handle esta relacionada con el estado, se manda a llamar el componente y reenderizar */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

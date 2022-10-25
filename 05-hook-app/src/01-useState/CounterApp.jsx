import { useState } from "react";

export const CounterApp = () => {
  const [estado, setCounter] = useState({
    //pueden tener nombres distintos
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = estado;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />
      <button
        className="btn"
        //Cuando se trata de un obj el estado, hay que tener MUCHO EN CUENTA los demas valores del estado, ya que modificamos unos solo aca
        onClick={() => setCounter({ ...estado, counter1: counter1 + 1 })}
      >
        +1
      </button>
    </>
  );
};

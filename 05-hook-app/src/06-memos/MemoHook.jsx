import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const procesoPesado = (iteracion = 100) => {
  for (let i = 0; i < iteracion; i++) {
    console.log("Ahi vamos..");
  }

  return `Iteracion nro.: ${iteracion}`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  //Solo va a reenderizar si y solo si el estado counter cambia, no por el show
  const valorMemorizado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <h4>{valorMemorizado}</h4>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

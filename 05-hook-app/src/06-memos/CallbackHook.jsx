import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const incremento = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incremento} />
    </>
  );
};

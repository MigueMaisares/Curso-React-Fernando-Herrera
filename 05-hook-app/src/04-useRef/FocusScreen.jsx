import { useRef } from "react";

export const FocusScreen = () => {
  //Este hook solo almacena la refencia que le asignemos y no dispara ninguna renderizacion
  //Y el mayor sentido de usarlo es que la referencia SEA CONTROLABLE!!!
  const inputRef = useRef();

  const onRef = () => {
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
        ref={inputRef}
      />
      <button onClick={onRef} className="btn btn-primary mt-2">
        Click
      </button>
    </>
  );
};

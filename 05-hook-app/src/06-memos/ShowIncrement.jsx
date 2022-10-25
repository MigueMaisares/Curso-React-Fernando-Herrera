export const ShowIncrement = ({ increment }) => {
  console.log("Me volvi a generar :c");

  return (
    <button className="btn btn-primary" onClick={increment}>
      Incrementar
    </button>
  );
};

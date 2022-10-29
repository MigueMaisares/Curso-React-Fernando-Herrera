import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const [input, setInput] = useState("");

  const onChangeInput = ({ target }) => {
    setInput(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onNewTodo({
      id: new Date().getTime(),
      descripcion: input,
      done: false,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        onChange={onChangeInput}
        value={input}
      />
      <button className="btn btn-outline-primary mt-2" type="submit">
        Agregar
      </button>
    </form>
  );
};

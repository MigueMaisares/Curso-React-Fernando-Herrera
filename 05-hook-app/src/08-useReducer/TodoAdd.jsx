import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  /* const [input, setInput] = useState(""); Esta bien pero hay que hacer uso de nuestros custom hooks!!!
  const onChangeInput = ({ target }) => {
    setInput(target.value);
  }; */

  const { descripcion, onInputChange, onResetForm } = useForm({
    descripcion: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (descripcion.length < 1) return;

    const nuevoTodo = {
      id: new Date().getTime(),
      done: false,
      descripcion: descripcion,
    };

    onNewTodo(nuevoTodo);

    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        value={descripcion}
        name="descripcion"
      />
      <button className="btn btn-outline-primary mt-2" type="submit">
        Agregar
      </button>
    </form>
  );
};

import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    descripcion: "Recoletar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    descripcion: "Recoletar la piedra del Alma",
    done: false,
  },
];

export const TodoApp = () => {
  //    despachador de estados
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1>Todo APP</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="¿Que hay que hacer?"
              className="form-control"
            />
            <button className="btn btn-outline-primary mt-2" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

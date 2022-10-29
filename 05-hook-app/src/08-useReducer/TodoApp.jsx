import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    descripcion: "Recoletar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    descripcion: "Recoletar la piedra del Infinito",
    done: false,
  },
];

export const TodoApp = () => {
  const handleNewTodo = (todo) => {
    console.log({ todo });
  };

  //    despachador de estados
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

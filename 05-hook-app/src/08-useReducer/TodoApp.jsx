import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./TodoReducer";

const initialState = [];

//Necesitamos inicializar nuestro state con los todos anteriores
const init = () => {
  //Al iniciar la aplicacion sera nulo lo del localStorage
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  //    despachador de acciones que contienen la carga = estado
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    //Necesitamos serializar el estado que es un Objeto y castearlo a String (localStorage lo requiere)
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };
    //De esta manera le mando la accion al Reducer
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    /* console.log(id); */
    dispatch({
      type: "[TODO] Remove todo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleRemoveTodo} />
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

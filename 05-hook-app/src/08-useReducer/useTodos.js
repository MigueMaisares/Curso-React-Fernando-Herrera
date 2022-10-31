import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

//Necesitamos inicializar nuestro state con los todos anteriores
const init = () => {
  //Al iniciar la aplicacion sera nulo lo del localStorage
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  //despachador de acciones que contienen la carga = estado
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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
    dispatch({
      type: "[TODO] Remove todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};

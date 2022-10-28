const initialState = [
  {
    id: 1,
    todo: "Ir a comprar el pan",
    done: false,
  },
];
//Arrancamos con un estado inicial
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] Add todo") {
    return [...state, action.payload];
  }

  return state;
};
//guardamos el sig estado
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar salame",
  done: false,
};

const addTodoAction = {
  type: "[TODO] Add todo",
  payload: newTodo,
};
//Y le pasamos estado actual para que siga agregando estados considerando los estados anteriores
todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });

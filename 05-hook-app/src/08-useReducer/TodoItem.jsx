export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {/* En los fragments no se pueeden poneer listeners */}
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.descripcion}
      </span>
      {/* Si enviamos en el onClick{onDeleteTodo(todo.id)} estariamos ejecutandolo cada vez que se renderize el componente y no cuando haga click en Borrar*/}
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

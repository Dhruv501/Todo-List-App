
function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="todo-item">
      <p>{todo.text}</p>
      <button
       onClick={() => deleteTodo(todo.id)}
       className="del-btn"
      >Delete</button>
    </li>
  );
}

export default TodoItem;

import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Learn Hooks", completed: false },
    { text: "Build a to-do app", completed: false },
  ]);

  function handleTodoClick(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} onClick={() => handleTodoClick(index)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

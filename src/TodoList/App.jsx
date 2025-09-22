import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState, useRef } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: idRef.current++, text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

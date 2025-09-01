import React, { useState } from "react";

function AddTodoForm({ onAdd }) {
 const [text, setText] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!text.trim()) return;
  onAdd(text);
  setText("");
};

return (
   <form onSubmit={handleSubmit} className="flex mb-4">
   <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Add a new todo..."
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
         type="submit"
         className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition"
         >
           Add 
         </button>
        </form>
       );
     }
     // TodoList component
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Write Tests", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        My Todo List
      </h2>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`flex justify-between items-center p-2 mb-2 rounded-md cursor-pointer transition ${
              todo.completed
                ? "bg-green-100 text-green-800 line-through"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
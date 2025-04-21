import { useState } from "react";

const Tasks = function () {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign:"center",
        
      }}
    >
      <h1>Task Management</h1>
      <input
        type="text"
        placeholder="Add the tasks"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {todos.length === 0 ? (
          <p> No tasks yet</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              {!todo.completed && (
                <button onClick={() => handleComplete(todo.id)}>
                  Task Completed
                </button>
              )}
              <button onClick={() => handleDelete(todo.id)}>Delete Task</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Tasks;

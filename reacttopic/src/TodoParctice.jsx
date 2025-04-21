import { useState } from "react";

const Tasking = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
   if (!task?.trim()) return;

   setTodos([...todos, {id: Date.now(), text: task, completed: false }])
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
    <div>
      <h2>Task Management Practice</h2>
      <input
        type="text"
        value={task}
        placeholder="Add the task"
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.length === 0 ? (
          <p>No taskes yet</p>
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
                <button onClick={()=>handleComplete(todo.id)}>
                  Mark As completed
                </button>
              )}
              <button onClick={()=>handleDelete(todo.id)}>Delete the Task</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Tasking;

import { useState } from "react";

const TodoPractice = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    if(!task?.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  }

  return (
    <div>
      <h1>Welcome Task Manager</h1>
      <input
        type="text"
        value={task}
        placeholder="Add the task"
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {" "}
        {todos.length === 0 ? (
          <p>no tasks yet</p>
        ) : (
          todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
        )}
      </ul>
    </div>
  );
};

export default TodoPractice;

import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>

      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
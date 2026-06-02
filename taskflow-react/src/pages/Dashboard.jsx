import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

const API_URL = "http://localhost:5000/api/tasks";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches depuis le Back-End au montage
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Erreur chargement tâches :", err));
  }, []);

  // Ajouter une tâche via le Back-End
  const onAddTask = (newTask) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((res) => {
        if (res.status === 201) return res.json();
        throw new Error("Erreur lors de la création");
      })
      .then((savedTask) => setTasks([...tasks, savedTask]))
      .catch((err) => console.error("Erreur ajout tâche :", err));
  };

  return (
    <div>
      <h1>TaskFlow</h1>
      <TaskForm onAddTask={onAddTask} />
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default Dashboard;
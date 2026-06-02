import { useParams } from "react-router-dom";

function TaskDetail() {

  const { id } = useParams();

  const tasks = JSON.parse(localStorage.getItem("taskflow_data")) || [];

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Tâche introuvable</h2>;
  }

  return (
    <div>
      <h1>{task.titre}</h1>

      <p>{task.description}</p>

      <strong>{task.statut}</strong>
    </div>
  );
}

export default TaskDetail;
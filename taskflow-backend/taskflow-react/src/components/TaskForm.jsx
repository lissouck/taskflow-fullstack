import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("A faire");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      status,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setStatus("A faire");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>A faire</option>
        <option>En cours</option>
        <option>Termine</option>
      </select>

      <br /><br />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;
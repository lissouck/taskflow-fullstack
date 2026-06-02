import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <Link to={`/task/${task._id}`}>
      <div
        style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <strong>{task.status}</strong>
      </div>
    </Link>
  );
}

export default TaskCard;
import "./style.css";
import TaskItem from "../task-item";

function TaskList(props) {
  return (
    <ul className="list">
      {props.tasks.map((v) => (
        <TaskItem task={v}></TaskItem>
      ))}
    </ul>
  );
}

export default TaskList;

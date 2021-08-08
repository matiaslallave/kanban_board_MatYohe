import "./style.css";
import TaskItem from "../task-item";

function TaskList(props) {
  return (
    <ul className="list">
      {props.tasks.map((v) => (
        <TaskItem key = {v.id} task={v} deleteCard={props.deleteCard} searchFilter = {props.searchFilter}></TaskItem>
      ))}
    </ul>
  );
}

export default TaskList;

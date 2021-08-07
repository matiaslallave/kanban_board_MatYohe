import "./style.css";
import AdjustIcon from "@material-ui/icons/Adjust";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function TaskItem(props) {
  return (
    <li className="list-element">
      {props.task.done ? (
        <CheckCircleOutlineIcon className='icon-done'></CheckCircleOutlineIcon>) :
        (<AdjustIcon className='icon-todo-progress'></AdjustIcon>)}
      <div className="title-block">
        <p className="list-title">{props.task.title}</p>
        <p className="secundary-text">#{props.task.id} Created on {props.task.date}</p>
      </div>
      <button className="basket">🗑️</button>
    </li>
  );
}

export default TaskItem;

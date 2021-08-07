import "./style.css";
import AdjustIcon from "@material-ui/icons/Adjust";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function TaskItem(props) {
  return (
    <div className="list-element">
      {props.done === true ? (
        <CheckCircleOutlineIcon className='icon-done'>{props.done}</CheckCircleOutlineIcon>) :
        (<AdjustIcon className='icon-todo-progress'></AdjustIcon>)}
      <div className="title-block">
        <p className="list-title">{props.title}</p>
        <p className="secundary-text">#{props.id} Created on {props.date}</p>
      </div>
      <button className="basket">🗑️</button>
    </div>
  );
}

export default TaskItem;

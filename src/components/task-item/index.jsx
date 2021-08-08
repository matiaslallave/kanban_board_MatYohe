import "./style.css";
import AdjustIcon from "@material-ui/icons/Adjust";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";

function TaskItem(props) {

  const handleDelete = () => {
    props.deleteCard(props.task.id);
  };

  return (
    <React.Fragment>
      {props.task.title.toLowerCase().includes(props.searchFilter) ? (
        <li className={`list-element`}>
          {props.task.done ? (
            <CheckCircleOutlineIcon className="icon-done"></CheckCircleOutlineIcon>
          ) : (
            <AdjustIcon className="icon-todo-progress"></AdjustIcon>
          )}
          <div className="title-block">
            <p className="list-title">{props.task.title}</p>
            <p className="secundary-text">
              #{props.task.id} Created on {props.task.date}
            </p>
          </div>
          <button className="basket" onClick={handleDelete}>
            🗑️
          </button>
        </li>
      ) : (
        <li className={`list-element display-none`}>
          {props.task.done ? (
            <CheckCircleOutlineIcon className="icon-done"></CheckCircleOutlineIcon>
          ) : (
            <AdjustIcon className="icon-todo-progress"></AdjustIcon>
          )}
          <div className="title-block">
            <p className="list-title">{props.task.title}</p>
            <p className="secundary-text">
              #{props.task.id} Created on {props.task.date}
            </p>
          </div>
          <button className="basket" onClick={handleDelete}>
            🗑️
          </button>
        </li>
      )}
    </React.Fragment>
  );
}

export default TaskItem;

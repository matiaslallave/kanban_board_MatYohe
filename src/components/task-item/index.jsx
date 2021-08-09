import "./style.css";
import AdjustIcon from "@material-ui/icons/Adjust";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import { useState, useEffect } from "react";

function TaskItem(props) {

  const [isHidden, setIsHidden] = useState('');

  const handleDelete = () => {
    props.deleteCard(props.task.id);
  };

  useEffect (() => {
    props.task.title.toLowerCase().includes(props.searchFilter) ? setIsHidden('') : setIsHidden('display-none');
  }, [props.searchFilter, props.task.title]);

  return (
    <React.Fragment>
        <li className={`list-element ${isHidden}`}>
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
    </React.Fragment>
  );
}

export default TaskItem;

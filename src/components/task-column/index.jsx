import "./style.css";
import TaskItem from "../task-item";
import { useState } from "react";

function TaskColumn(props) {
  const [taskArray, setTaskArray] = useState([]);
  const [showInput, setShowInput] = useState('display-none');
  const [counter, setCounter] = useState(0);

  return (
    <div className="list-block">
      <div className="list-header">
        <div className="counter-title-block">
          <p className="task-counter">{counter}</p>
          <p className="task">{props.cardName}</p>
        </div>
        <div className="clear-block">
          <button className="add-task" onClick = {() =>  setShowInput('')}>+</button>
          {props.clearAll ? <button className="clear-all">Clear All</button> : ''}
        </div>
      </div>

      <div className={showInput}>
        <textarea
          placeholder="Enter a note..."
          className="new-task-placeholder"
        ></textarea>
        <div className="add-cancel-block">
          <button className="add-button-inactive add-button-border">Add</button>
          <button className="cancel-button" onClick = {() =>  setShowInput('display-none')}>Cancel</button>
        </div>
      </div>

      <ul className="list">
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
      </ul>
    </div>
  );
}

export default TaskColumn;

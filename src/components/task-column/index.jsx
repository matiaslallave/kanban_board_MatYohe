import "./style.css";
import TaskItem from "../task-item";
import { useState } from "react";

function TaskColumn(props) {
  const [addClass, setAddClass] = useState("add-button-inactive");
  const [taskArray, setTaskArray] = useState([]);
  const [showInput, setShowInput] = useState("display-none");
  const [counter, setCounter] = useState(0);

  const [id, setId] = useState(0);

  const [card, setCard] = useState({
    done: props.clearAll,
    title: "",
    id: id,
    date: "",
  });

  return (
    <div className="list-block">
      <div className="list-header">
        <div className="counter-title-block">
          <p className="task-counter">{counter}</p>
          <p className="task">{props.cardName}</p>
        </div>
        <div className="clear-block">
          <button className="add-task" onClick={() => setShowInput("")}>
            +
          </button>
          {props.clearAll ? (
            <button className="clear-all">Clear All</button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={showInput}>
        <textarea
          placeholder="Enter a note..."
          className="new-task-placeholder"
          onChange={(e) => {
            setCard({title: e.target.value}); 
            e.target.value !== ""
              ? setAddClass("add-button")
              : setAddClass("add-button-inactive");
          }}
        ></textarea>
        <div className="add-cancel-block">
          <button
            className={`add-button-border ${addClass}`}
            onClick={() => {
              setCounter(taskArray.length);
              setId(id + 1);
              setTaskArray(card);
            }}
          >
            Add
          </button>
          <button
            className="cancel-button"
            onClick={() => setShowInput("display-none")}
          >
            Cancel
          </button>
        </div>
      </div>

      <ul className="list">
        {taskArray.map((v) => (
          <TaskItem task={v}></TaskItem>
        ))}
      </ul>
    </div>
  );
}

export default TaskColumn;

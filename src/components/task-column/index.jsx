import "./style.css";
import { useState } from "react";
import TaskList from "../task-list";
import { useRef } from "react";

function TaskColumn(props) {
  const [tasks, setTasks] = useState([]);

  const [cardText, setCardText] = useState('');

  const [addClass, setAddClass] = useState("add-button-inactive");
  const [showInput, setShowInput] = useState("display-none");
  const [counter, setCounter] = useState(0);

  const textAreaRef = useRef();

  const handleAddTask = () => {
    let now = new Date();
    let day = now.getDate() + '/' + ( now.getMonth() + 1 ) + '/' + now.getFullYear();
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    setCounter(counter + 1);

    global.config.ID.value++;

    setTasks((v) => {
      return [...v, { done: props.done, title: cardText, id: global.config.ID.value, date: `${day} at ${time}`}];
    });

    textAreaRef.current.value = '';
    setCardText('');
  };

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
          {props.done ? <button className="clear-all">Clear All</button> : ""}
        </div>
      </div>

      <div className={showInput}>
        <textarea
          ref={textAreaRef}
          placeholder="Enter a note..."
          className="new-task-placeholder"
          onChange={(e) => {
            setCardText(e.target.value);
            e.target.value !== ""
              ? setAddClass("add-button")
              : setAddClass("add-button-inactive");
          }}
        ></textarea>
        <div className="add-cancel-block">
          {cardText === '' ? (
            <button className={`add-button-border ${addClass}`}>Add</button>
          ) : (
            <button
              className={`add-button-border ${addClass}`}
              onClick={() => {handleAddTask()}}
            >
              Add
            </button>
          )}

          <button
            className="cancel-button"
            onClick={() => setShowInput("display-none")}
          >
            Cancel
          </button>
        </div>
      </div>

      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}

export default TaskColumn;

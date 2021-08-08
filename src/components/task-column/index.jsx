import "./style.css";
import { useState } from "react";
import TaskList from "../task-list";
import { useRef } from "react";

function TaskColumn(props) {
  const [tasks, setTasks] = useState([]);

  const [cardText, setCardText] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  const [addClass, setAddClass] = useState("add-button-inactive");
  const [showInput, setShowInput] = useState("display-none");
  const [counter, setCounter] = useState(0);

  const textAreaRef = useRef();

  const handleAddTask = () => {
    let now = new Date();
    let day =
      now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    setCounter(counter + 1);

    global.config.ID.value++;

    setTasks((v) => {
      return [
        ...v,
        {
          done: props.done,
          title: cardText,
          id: global.config.ID.value,
          date: `${day} at ${time}`,
        },
      ];
    });

    textAreaRef.current.value = "";
    setCardText("");
  };

  const handleClearAll = () => {
    const arrayCleared = [];
    setTasks(arrayCleared);
    setCounter(0);
  };

  const deleteCard = (id) => {
    const arrayCardDeleted = tasks.filter((v) => v.id !== id);
    setTasks(arrayCardDeleted);
    setCounter(counter - 1);
  }

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
          {props.done ? (
            <button className="clear-all" onClick={handleClearAll}>
              Clear All
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={showInput}>
        <textarea
          ref={textAreaRef}
          placeholder="Enter a note..."
          className="new-task-placeholder"
          onChange={(e) => {
            setCardText(e.target.value);
            if (e.target.value !== "") {
              setAddClass("add-button");
              setIsDisabled(false);
            } else {
              setAddClass("add-button-inactive");
            }
          }}
        ></textarea>
        <div className="add-cancel-block">
          <button
            className={`add-button-border ${addClass}`}
            disabled={isDisabled}
            onClick={() => handleAddTask()}
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

      <TaskList tasks={tasks} deleteCard={deleteCard} searchFilter= {props.searchFilter}></TaskList>
    </div>
  );
}

export default TaskColumn;

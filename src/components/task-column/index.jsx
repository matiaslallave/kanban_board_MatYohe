import "./style.css";
import { useState } from "react";
import TaskList from "../task-list";
import { useRef } from "react";

function TaskColumn(props) {
  let auxArray;
  switch (props.cardName) {
    case "To do":
      auxArray = JSON.parse(localStorage.getItem("todoStorage"));
      break;
    case "In progress":
      auxArray = JSON.parse(localStorage.getItem("inprogressStorage"));
      break;
    case "Done":
      auxArray = JSON.parse(localStorage.getItem("doneStorage"));
      break;
    default:
      break;
  }
  if (auxArray === null) auxArray = [];
  const [tasks, setTasks] = useState(auxArray);

  const [counter, setCounter] = useState(auxArray.length);
  const [titleText, setTitleText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [addClass, setAddClass] = useState("add-button-inactive");
  const [showInput, setShowInput] = useState("display-none");

  const textAreaRef = useRef();

  const handleAddTask = () => {
    let now = new Date();
    let day =
      now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    setCounter(counter + 1);

    if (global.config.ID.value === null) global.config.ID.value = 0;

    global.config.ID.value++;
    localStorage.setItem("IDStorage", JSON.stringify(global.config.ID.value));

    setTasks((v) => {
      let array = [
        ...v,
        {
          done: props.done,
          title: titleText,
          id: global.config.ID.value,
          date: `${day} at ${time}`,
        },
      ];

      switch (props.cardName) {
        case "To do":
          localStorage.setItem("todoStorage", JSON.stringify(array));
          break;
        case "In progress":
          localStorage.setItem("inprogressStorage", JSON.stringify(array));
          break;
        case "Done":
          localStorage.setItem("doneStorage", JSON.stringify(array));
          break;
        default:
          break;
      }

      return array;
    });

    textAreaRef.current.value = "";
    setIsDisabled(true);
    setAddClass("add-button-inactive");
  };

  const handleClearAll = () => {
    const arrayCleared = [];
    setTasks(arrayCleared);
    setCounter(0);
    localStorage.setItem("doneStorage", JSON.stringify(arrayCleared));
  };

  const handleChangeTaskInput = (e) => {
    setTitleText(e.target.value);
    if (e.target.value !== "") {
      setAddClass("add-button");
      setIsDisabled(false);
    } else {
      setAddClass("add-button-inactive");
      setIsDisabled(true);
    }
  };

  const deleteCard = (id) => {
    const arrayCardDeleted = tasks.filter((v) => v.id !== id);
    setTasks(arrayCardDeleted);
    setCounter(counter - 1);

    switch (props.cardName) {
      case "To do":
        localStorage.setItem("todoStorage", JSON.stringify(arrayCardDeleted));
        break;
      case "In progress":
        localStorage.setItem(
          "inprogressStorage",
          JSON.stringify(arrayCardDeleted)
        );
        break;
      case "Done":
        localStorage.setItem("doneStorage", JSON.stringify(arrayCardDeleted));
        break;
      default:
        break;
    }
  };

  const updateCounter = (counter) => {
    return counter++;
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
          onChange={handleChangeTaskInput}
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

      <TaskList
        tasks={tasks}
        deleteCard={deleteCard}
        searchFilter={props.searchFilter}
        updateCounter={updateCounter}
      ></TaskList>
    </div>
  );
}

export default TaskColumn;

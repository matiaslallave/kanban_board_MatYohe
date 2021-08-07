import React from "react";
import "./style.css";

import TaskColumn from "../task-column";

function Board() {
  return (
    <React.Fragment>
      <div className="sub-header">
        <div className="version-block">
          <p className="version">Version 1.0.0</p>
          <p className="updated">Updated on 8 Aug &#xFE0E;</p>
        </div>
        <div className="search-container">
          <img
            src="https://www.seekpng.com/png/full/71-712261_lens-clipart-magnifier-search-icon-png-grey.png"
            alt=""
            className="search-img"
          />
          <input className="search-field" placeholder="Search card..."></input>
        </div>
      </div>

      <div className="board">
        <TaskColumn clearAll = {false} cardName ='To do' ></TaskColumn>
        <TaskColumn clearAll = {false} cardName ='In progress' ></TaskColumn>
        <TaskColumn clearAll = {true} cardName ='Done' ></TaskColumn>
      </div>
    </React.Fragment>
  );
}

export default Board;

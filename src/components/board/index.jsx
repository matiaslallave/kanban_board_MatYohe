import React from "react";
import "./style.css";

import TaskColumn from "../task-column";
import { useState } from "react";

function Board() {
  const [searchFilter, setsearchFilter] = useState('');

  const handleSearchFilter = (e) => {
    if (e.target.value.length > 2) {
      setsearchFilter(e.target.value.toLowerCase());
    } else {
      setsearchFilter('');
    }
  }

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
          <input className="search-field" placeholder="Search card..." onChange={handleSearchFilter}></input>
        </div>
      </div>

      <div className="board">
        <TaskColumn done = {false} cardName ='To do' searchFilter= {searchFilter} ></TaskColumn>
        <TaskColumn done = {false} cardName ='In progress' searchFilter= {searchFilter}></TaskColumn>
        <TaskColumn done = {true} cardName ='Done' searchFilter= {searchFilter}></TaskColumn>
      </div>
    </React.Fragment>
  );
}

export default Board;

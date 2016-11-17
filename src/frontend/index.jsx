import React from "react";
import ReactDOM from "react-dom"

import List from "./components/list.jsx";

function load(){
  fetch("/api/users").then((response) => (response.json())).then(render)
}

function render(items) {
    ReactDOM.render(
      <div className="app">
        <List items={items}/>
        <button onClick={load}>refresh</button>
        <button onClick={add}>add</button>
      </div>, document.querySelector(".main"))
}

load()

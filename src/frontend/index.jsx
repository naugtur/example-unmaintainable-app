import React from "react";
import ReactDOM from "react-dom"

import List from "./components/list.jsx";
import User from "./components/user.jsx";

function loadAll() {
    fetch("/api/users").then((response) => (response.json())).then(renderAll)
}

function renderAll(items) {
    ReactDOM.render(
        <div className="app">
        <List items={items}/>
        <button onClick={loadAll}>refresh</button>
    </div>, document.querySelector(".main"))
}

function loadOne(id) {
    fetch("/api/users/" + id).then((response) => (response.json())).then(renderOne)
}

function renderOne(user) {
    ReactDOM.render(
        <div className="app">
        <User {...user}/>
        <button onClick={loadOne.bind(null,user.id)}>refresh</button>
    </div>, document.querySelector(".main"))
}

function router() {
    //worst routing I've ever seen
    if (window.location.hash) {
        loadOne(window.location.hash.substring(1))
    } else {
        loadAll()
    }
}

router()
window.addEventListener("hashchange",router)

import React from "react";
import "./todo-list.css"


const TodoList = ()=>{
    return(
        <ul className="todo-list">
            <li>
                <h2>List title</h2>
                <p>List text</p>
            </li>
        </ul>
    );
};


export default TodoList;
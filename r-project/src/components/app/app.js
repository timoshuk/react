import React, {Component} from "react";
import "./app.css";

import TodoList from "../todo-list/todo-list";


export default class App extends Component{
    render(){
        return(<div>
            <h1>Список справ</h1>
            <TodoList/>
        </div>);
    }
}
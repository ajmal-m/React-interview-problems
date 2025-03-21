import React from "react";
import ToDoList from "./ToDoList";
import { AddToDo } from "./AddTodo";

export const ToDoApp : React.FC = () => {

    return(
        <>
            <AddToDo/>
            <ToDoList/>
        </>
    )
}
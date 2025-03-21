import { TaskProvider } from "./TaskContext";
import { ToDoApp } from "./ToDoApp";
export default function ToDoAppMain(){
    return(
        <TaskProvider >
            <ToDoApp/>
        </TaskProvider>
    )
};


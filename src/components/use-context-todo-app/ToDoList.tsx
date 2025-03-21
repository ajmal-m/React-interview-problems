import { UseTaskContext } from "./TaskContext";
import { ToDoItem } from "./ToDoItem";
import { Task } from "./Types";

export default function ToDoList(){
    const {tasks}  = UseTaskContext();
    return(
      <ul>
        {
            tasks.length > 0 && tasks.map((item : Task) => (
               <ToDoItem item={item}/>
            ))
        }
      </ul>
    )
}
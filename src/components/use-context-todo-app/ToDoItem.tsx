import React, { useState } from "react"
import { Task } from "./Types"
import { UseTaskDispatchContext } from "./TaskContext";
import { DELETE_TASK ,  EDIT_TASK} from "./constants";

export const ToDoItem : React.FC<{item : Task}> = ({item}) => {
    const {dispatch} = UseTaskDispatchContext();
    const [isEdit, setEdit] = useState(false);

    return (
        <li key={item.id}>
            {
                isEdit ? (
                    <div >
                        <input type="text" name="edit-text" id="edit-text" value={item.title} onChange={(e) => dispatch({ type: EDIT_TASK, payload: { text: e.target.value, task : item}})} />
                        <button onClick={() => setEdit(false)}>Save</button>
                    </div>
                ) : (
                    <div>
                        <span style={{marginRight:'4px'}}>{item.title}</span>
                        <button onClick={() => setEdit(true)}>Edit</button>
                    </div>
                )
            }
            <button onClick={() => dispatch({ type: DELETE_TASK, payload: { task : item}})}>Delete</button>
        </li>
    )
}
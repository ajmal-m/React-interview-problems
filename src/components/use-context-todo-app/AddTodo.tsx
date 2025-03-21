import React, { useState } from "react"
import { UseTaskDispatchContext } from "./TaskContext";
import { ADD_TASK } from "./constants";

export const AddToDo = () => {
    const [text, setText] = useState('');
    const {dispatch} = UseTaskDispatchContext();

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: ADD_TASK,
            payload: {
                text:text
            }
        });
        setText('');
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}
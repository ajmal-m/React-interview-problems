import React, {  createContext, useContext, useReducer } from "react";
import {State, TaskContextType, TaskDispatchType, Action} from './Types';
import {ADD_TASK, DELETE_TASK,  EDIT_TASK} from './constants';

const TaskContext = createContext<TaskContextType | null>(null);
const TasksDispatchContext = createContext<TaskDispatchType | null>(null)


const taskReducer= (prevState : State, action :Action ) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...prevState,
                {
                    id: new Date().toISOString(),
                    title : action.payload?.text ?? "Untitled Task",
                    completed:false
                }
            ];
            break;
        case DELETE_TASK :
            return [
                ...prevState.filter( x => x.id !== action.payload?.task?.id)
            ];
            break;
        case  EDIT_TASK:
            return [
                ...prevState.map(x => {
                    if(action.payload?.task?.id === x.id) x.title = action.payload?.text || '';
                    return x;
                })
            ]
            break;
        default:
            return prevState;
            break;
    }
}
export const TaskProvider = ({ children } : { children : React.ReactNode})=> {
    const [tasks, dispatch] = useReducer(taskReducer, [{ id: 'ugdiuwd', title:'gdiugwqdiuq', completed:false}] as State);

    return (
        <TaskContext.Provider value={{tasks}}>
            <TasksDispatchContext.Provider value={{dispatch}}>
                {children}
            </TasksDispatchContext.Provider>
        </TaskContext.Provider>
    )
};

export const UseTaskContext = () => {
    const context =  useContext(TaskContext);
    if (!context) {
        throw new Error("UseTaskContext must be used within a TaskProvider");
    }
    return context;
};

export const UseTaskDispatchContext = () => {
    const context = useContext(TasksDispatchContext);
    if (!context) {
        throw new Error("UseTaskDispatchContext must be used within a TaskProvider");
    }
    return context;
}
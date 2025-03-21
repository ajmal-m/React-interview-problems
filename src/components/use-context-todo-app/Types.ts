import { Dispatch } from "react";

export type Task = {
    title : string,
    id: string,
    completed: boolean
};

export type State = Task[];
export type Payload = {
    task?:Task,
    text?:string
}


export type Action = {
    type: string;
    payload?: Payload;
};
  
export type TaskContextType = {
    tasks: State;
};

export type TaskDispatchType = {
    dispatch: Dispatch<Action>;
}
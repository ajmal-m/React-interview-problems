import { useState } from "react";


const delay = async (time : number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    })
}

export const useLocalStorage = () => {
    const [value, setValue] = useState(true);
    return [value, setValue]

}
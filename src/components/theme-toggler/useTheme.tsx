import { useEffect, useState } from "react";

export const useTheme = (key : string,  defaultValue : string) => {

    const [value, setvalue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }
        return currentValue ;
    });

    useEffect(() => {
        console.log("Use effect", value);
        
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])


    return [value, setvalue]
}
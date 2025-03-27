import { memo, useCallback, useState } from "react";


export const UseCallBackApp = () => {
    const [count, setCount] = useState(12);

    const incrementCount = useCallback(() => {
        setCount(count => count + 1);
    }, []);

    const decrementCount = useCallback(() => {
        setCount(count => count-1);
    },[]);
    return <>
        <h1>Count : {count}</h1>
        <Button title="Increment" action={incrementCount}/>
        <Button title="Decrement" action={decrementCount}/>
    </>
};


const Button = memo(({title, action} : { title : string, action: () => void}) => {
    return(
        <button onClick={action}>
            {title}
        </button>
    )
});


const UseToggle = (initialState = false) : [boolean, (val : boolean) => void] => {
    const [toggle, setToggle] = useState(initialState);
    const updateToggle = useCallback( (val : boolean) => {
        setToggle(val)
    }, []);
    return [toggle,updateToggle ];
}





export const ToggleComponent = () => {
    const [ toggle, updateToggle] = UseToggle();
    return <>
        <h2>Toggle</h2>
        <p>
            Toggle is {  toggle ? "ON" : "OFF"}
        </p>
        <button onClick={() => updateToggle(true)}>
            ON
        </button>
        <button onClick={() => updateToggle(false)}>
            OFF
        </button>
    </>
}
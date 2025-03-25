import React, { useState, useTransition } from "react"

export const TransitionComponent = ({ title }: { title ?: string}) => {
    const [text, setText] = useState("");
    const [list, setList] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();
    const LIST_LIMIT = 10000;


    const handleChangeText = (e : React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

        startTransition(() => {
            console.log("Transition occur....")
            let lst = [];
            for(let i=0; i< LIST_LIMIT; i++){
            
                lst.push(e.target.value);
            }
            setList(lst);
        });
    }
    return <>   
        <h1>{title}</h1>
        <input type="text" value={text} onChange={handleChangeText} />
        <ul>
            {
                isPending ? "Loading" :  list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </>
}
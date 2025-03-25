import React, { useTransition } from "react"

export const Item = ({ action} : { action : (q : number) => void}) => {
    const [isPending, startTransition] = useTransition();
    const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
        startTransition(async () => {
            action(Number(e.target.value));
        })
    }
    return <>
        <div style={{ display:'flex', justifyContent:'space-between'}}>
            <h1>Eras Tour Tickets</h1>
            <input type="number" name="input-name" id="input-name" onChange={handleChange} />
        </div>
    </>
}

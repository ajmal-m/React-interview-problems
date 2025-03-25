import React, { useState, useTransition } from "react";
import { Item } from "./Item";
import { Total } from "./total";
import { UpdateQuantity } from "./api";
export const CheckOutForm = () => {
    const [quantity, setQuantity] = useState(1);
    const [isPending, startTransition] = useTransition();

    const updateQuantity = (q : number) =>  startTransition( async () => {
        let  newQuantity = await UpdateQuantity(q as number);
        startTransition(() => {
            setQuantity(newQuantity as number)
        })
    });

    return <>
       <div style={{ border:'1px solid gray', padding:'12px'}}>
        <h1>Check out form</h1>
        <Item action={updateQuantity}/>
        <hr/>
        <Total quantity={quantity} isPending={isPending}/>
       </div>
    </>
}
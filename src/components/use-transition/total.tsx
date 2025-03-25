import { Loader } from "lucide-react";


const intl = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:"USD"
})

export const Total = ({ quantity , isPending} : { quantity : number, isPending : boolean}) => {
    return (
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h2>Total:</h2>
            {
                isPending ? <Loader className="animate-spin" style={{ animation:'animate-spin infinite'}}/> : <h1>{intl.format(quantity*999)}</h1>
            }
        </div>
    )
}
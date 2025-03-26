import { useState, useMemo, useCallback } from "react";

export const MemoComponent = () => {

    const [fname, setFName] = useState('John');
    const [lname, setlName] = useState("Doe")

    const listItems = useCallback(() => {
        console.log("list call")
        const ls = [];
        for(let i=0; i< 50; i++){
            ls.push(`${i+1} : HI AJMAL M`);
        }
        return ls;
    }, []);

    const getFullName = useCallback(() => {
        const fullname = fname+" "+lname;
        console.log("fullname function called ", fullname)
        return fullname;
    }, [fname, lname])

    const lists = useMemo(() => {
        return listItems();
    }, []);


    const fullName = useMemo(() => {
        return getFullName();
    }, [fname, lname])

    return <>
        <h1>Memo component</h1>
        <h2>Full name : {fullName}</h2>
        <input type="text" name="fname" id="fname" placeholder="firstName" value={fname} onChange={e => setFName(e.target.value)} />
        <input type="text" name="fname" id="fname" placeholder="lastName" value={lname} onChange={e => setlName(e.target.value)} />

        {
            lists.map((item) => (
                <h1 key={item}>{item}</h1>
            ))
        }
    </>
}
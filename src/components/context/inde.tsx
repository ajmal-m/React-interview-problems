import { useCallback, useState } from "react";
import { useAuth } from "../../context/auth"
export const MainContextApp = () => {
    const {user} = useAuth();
    return(
        <div>
            <h2>Hello World - {user}</h2>
        </div>
    )
}


export const SecondPage = () => {
    const {user, setUser} = useAuth();
    const [name, setName] = useState('');

    const addUser= useCallback(() => {
        setUser(name);
    }, [name]);

    if(user === 'user'){
        return <h2>Not Authorized</h2>
    }

    // Last check this if condition and return
    
    return(
        <div>
            <h2>Second page</h2>
            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={addUser}>ADD USER</button>
        </div>
    )
};
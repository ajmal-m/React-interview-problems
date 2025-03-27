import { memo, useCallback, useEffect, useState } from "react";


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
};



const useFetch = (url : string) : [{ body: string; id: number; userId: number; title: string}[], boolean, boolean]=> {

    const [data, setData] = useState<{ body: string; id: number; userId: number; title: string}[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if(!res.ok) throw new Error("Error while fetching url");
                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(true);
            }finally{
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            // Nothing call back
        }
    }, [url]);

    return [data, loading, error];
};


export const CustomHookExmapleTwo = () => {
    const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts');

    console.log(data, loading)


    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error occur...</p>
    }
    return <>
        <div>
            {
                data && data.length > 0 && data.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    </>
}
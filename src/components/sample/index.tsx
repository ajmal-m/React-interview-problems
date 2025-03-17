import React, { createContext, memo, useActionState, useCallback, useContext, useEffect, useRef, useState } from "react";

export const Sample = ()=> {

    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const clear = () => {
        setText("");
        inputRef.current.focus();
    }

    const changeText = (e : any) => {
        console.log("Change text", e.target)
        setText(() => e.target.value)
    }

    useEffect(() => {
        console.log("Ref value -- ", inputRef);
    }, [])

    useEffect(() => {
        console.log("Intput text update -- ", text)
    }, [text])

    console.log("Render")

    return(
        <div>
           <input type="text" ref={inputRef} value={text} onChange={changeText} />
           <button onClick={clear}>Clear</button>
        </div>
    )
}


export const Counter = () => {
    const num = useRef(0);
    const [text, setText] = useState('');
    const updateCount = () => {
        num.current = num.current + 1;
        alert(`You clicked ${num.current} time`)
    }

    const updateDom = () => {
        let s = 'duwedwediuwediugew'
        setText(s[Math.floor(Math.random() * 10)])
    }

    return(
        <div>
            <button onClick={updateCount}>COUNT - {num.current} -- {text}</button>
            <button onClick={updateDom}>UPDATE DOM</button>
        </div>
    )
}


export function Stopwatch(){
    const [start, setStart] = useState(0);
    const [now, setNow] =  useState(0);
    const ref = useRef(null);

    const handleStart = () => {
        setStart(Date.now());
        setNow(Date.now());
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() => {
            setNow(Date.now());
        }, 100)
    }


    const handleStop = () => {
        if(ref.current){
            clearInterval(ref.current);
        }
    }

    let secondsPassed = 0;

    secondsPassed = (now-start)/1000;

    console.log('render -> ', secondsPassed)
    
    return(
        <div>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </div>
    )
}


export const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [playing, setIsPlaying] = useState(false);

    const handleClick = () => {
        let currentStatus = playing;
        setIsPlaying(!currentStatus);
        if(currentStatus){
            videoRef.current.pause();
        }else{
            videoRef.current.play();
        }
    }
    return(
        <>
            <button onClick={ handleClick} >
              {playing ? "Pause" : "Play" }
            </button>
            <video
                width="250"
                ref={videoRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}


const Input = ({ refItem} : { refItem : any}) => {
    return(
        <>
            <input type="text" ref={refItem}/>
        </>
    )
}


export const Form = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.value = 'HI Welcome'
        inputRef.current.focus();
    }
    return(
        <div>
            <Input refItem={inputRef}/>
            <button  onClick={focusInput}>Focus</button>
        </div>
    )
}


export const CatFriends = () => {

    const listRef = useRef(null);

    const scrollToIndex = (index) => {
        const listNode = listRef.current;
        const imageNode = listNode.querySelectorAll('li > img')[index];
        imageNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    return(
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)}>
                Neo
                </button>
                <button onClick={() => scrollToIndex(1)}>
                Millie
                </button>
                <button onClick={() => scrollToIndex(2)}>
                Bella
                </button>
            </nav>

            <div>
            <ul ref={listRef}>
                <li>
                    <img
                    src="https://placecats.com/neo/300/200"
                    alt="Neo"
                    />
                </li>
                <li>
                    <img
                    src="https://placecats.com/millie/200/200"
                    alt="Millie"
                    />
                </li>
                <li>
                    <img
                    src="https://placecats.com/bella/199/200"
                    alt="Bella"
                    />
                </li>
            </ul>
      </div>
        </>
    )
}



export const StateComponent = () => {
    const [userName, setUserName] = useState("AJMAL");
    const [count, setCount] = useState(0);
    const updateName = () => {
        setUserName("Ismail");
        setCount(a => a+1);
        // First it will print
        console.log("Name-> ", userName, count);
    }

    useEffect(() => {
        // Third time it will show
        console.log("UseEffect count --> ", count);
        
    }, [count])

    // Second it will show
    console.log("count -> ", count);

  
    return (
        <div>
            <h2>{userName} - {count}</h2>
            <button onClick={updateName}>ChangeName</button>
        </div>
    )
}



export const CounterButton = () =>{
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount ( count => count+1);
    }
    return <>
    <button onClick={updateCount}>You pressed me {count} time</button>
    </>
}


export const MyInput = () => {
    const [text, setText] = useState('hello');
    const updateText = (e : any) => setText(e.target.value);
    const resetText = () => setText('hello')
    return <>
        <input type="text" value={text} onChange={updateText}/>
        <p>You typed : {text}</p>
        <button onClick={resetText}>Reset</button>
    </>
}



export const MyCheckbox = () => {
    const [checked, setChecked] = useState(false);
    const updateCheck = () => setChecked(check => !check);
    return <>
        <input type="checkbox" name="checkbox" id="check-box" checked={checked} onChange={updateCheck}/>
        <h1>{ checked ? "You liked this" : "You did not like this"}</h1>
    </>
}


export const NameAgeForm = () => {
    const [name , setName] = useState('AJMAL');
    const [age, setAge] = useState(22);
    const incrementAge = () => setAge(a => a+1);
    const updateName = (e : any) => setName(e.target.value)
    return <>
        <input type="text" name="name" id="name" value={name} onChange={updateName} />
        <button onClick={incrementAge}>Increment age</button>
        <p>Hello {name}, age is {age}</p>
    </>
}


export const CounterMultiple = () => {
    const [age, setAge] = useState(22);

    const updateAge = () => {
        setAge(age => age+1);
    }
    return <>
        <p>Your age : {age}</p>
        <button onClick={ () => {
            updateAge();
            updateAge();
            updateAge();
        }}>+3</button>
        <button onClick={() => {
            updateAge();
        }}>+1</button>
    </>
}

export const FormData = () => {
    const [formData, setFormData] = useState({
        firstname:'ajmal',
        lastname:'m',
        email:'ajmal@gmail.com'
    })

    const updateFormData = (e : any) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
    return <>
        <label htmlFor="firstname">
            First Name : 
            <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={updateFormData} />
        </label>
        <label htmlFor="lastname">
            Last Name : 
            <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={updateFormData}/>
        </label>
        <label htmlFor="email">
            Email : 
            <input type="email" name="email" id="email" value={formData.email} onChange={updateFormData}/>
        </label>
        <p>
            {formData.firstname} {' '} { formData.lastname}
            <br/>
            {formData.email}
        </p>
    </>
}

const InitialList = () => {
    const list = [];
    for(let i=0; i<5;i++){
        list.push(`list item - ${i+1}`)
    }
    return list;
}



export const ListContainer = () => {

    const [listItems, setListItems] = useState(InitialList);
    const [text, setText] = useState('');

    const addTextToList = () => {
        setText('');
        setListItems( list => [ ...list, text] );
    }

    const updateText = (e: any) => setText(e.target.value);
    return <>
        <input type="text" name="text" id="text-id" value={text} onChange={updateText} />
        <button onClick={addTextToList}>Add</button>
        <ul>
            {
                listItems.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                ))
            }
        </ul>
    </>
}

const NodeForm = () => {
    const [name, setName] = useState("");
    const updateName = (e : any) => setName(e.target.value);
    return <>
        <input type="text" name="name" id="name" value={name} onChange={updateName}/>
    </>
}

// When Version change key binded to NodeForm key it re-Create NodeForm React component
export const KeyNode = () => {
    const [version, setVersion] = useState(0);
    const updateVersion = () => setVersion(v => v+1)
    return <>
        {version}
        <NodeForm key={version}/>
        <button onClick={updateVersion}>Reset</button>
    </>
}


export const DemoUseActionState = () => {
    return <>
        <FormUseActionState itemTitle="JavaScript: The Good Parts" itemID="2"/>
    </>
}

const addToCart = async (prevState : unknown, formData : FormData) => {
    console.log(prevState, formData)
  await new Promise((resolve) => setTimeout(() => {
    resolve(true);
  }, 2000));

  return "Form Submitted successfully.."
}


const FormUseActionState = ({itemTitle, itemID}:{ itemTitle ?: string, itemID ?: string}) => {
    const [message, formAction, isPending] = useActionState(addToCart, null);
    // const [data, formSubmitMethod, statusofMethod ] = useActionState(method, data initial value);
    return <>
    <form action={formAction} style={{ border:'1px solid grey', padding:'12px'}} >
        <h1>{itemTitle}</h1>
        <input type="hidden" name="itemID" value={itemID} />
        <button type="submit" disabled={isPending}>
           { isPending ? 'Pending..' : 'add To cart'}
        </button>
        { message && message}
    </form>
    </>
}

const getListItems = () => {
    const arr = [];
    for(let i=0; i< 5; i++){
        arr.push(`List item - ${i+1}`);
    }
    return arr;
}

const ListItems = memo(() => {
    const [list, setList] = useState(getListItems());
    console.log("list items")
    return <>
        <ul>
            {
                list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </>
});

export const TestUseCallBack = () => {
    const [num, setNum] = useState(4);

    const updateNum = () => setNum(num => num+1);
    return <>
       <h2>Test Use call Back</h2>
       <button onClick={updateNum} >{num} Times cliked</button>
       <ListItems />
    </>
}



export const TestUseCallBackTwo = () => {
    const [num, setNum] = useState(4);
    const [name, setName] = useState("");


    const updateNum = useCallback(() => {
        setNum(num => num+1);
    }, [num]);

    console.log("parent")


    return <>
    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
       <h2>Test Use call Back</h2>
       <ListTwo updateNum={updateNum} num={num}/>
    </>
}


const ListTwo = memo(({updateNum, num} : {updateNum : () => void, num: number}) => {
    console.log("lsit two")
    return <>
        <button onClick={updateNum} >{num} Times cliked</button>
        <ul>
           <li>List</li>
        </ul>
    </>
});

export const ThemeContext = createContext(null);

const ThemeForm = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    return <>
    <form action="" style={{
        display:'flex',
        flexDirection:"column",
        border:'1px solid black',
        padding:'12px',
        background: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
    }}>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="password" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="checkbox" name="" checked={theme === 'dark'} onChange={() => setTheme(theme ==='dark' ? 'light' : 'dark')} id="" />{theme}
    </form>
    </>
}


const NameStick = memo(() => {
    console.log("name component");
    return <>
        <h2>
            name4554@gmail.com
        </h2>
    </>
});

export const ContextApp = () => {
    const [theme, setTheme] = useState('light');
    return <>
        <ThemeContext.Provider value={{theme, setTheme}}>
            <input 
                type="checkbox" 
                checked={theme == 'dark'} 
                name="theme" id="theme" 
                onChange={() => setTheme( theme =='dark' ? 'light' : 'dark')}
            />{theme}
            <ThemeForm/>
            <NameStick/>
        </ThemeContext.Provider>
    </>
}

let CounterContext = createContext(null);

const CounterProvider = ({children}) => {
    const [count, setCount] = useState(3);
    return <CounterContext value={{ count, updateCount: setCount}}>
        {children}
    </CounterContext>
}

const ComponentA = () => {
    const {count, updateCount} = useContext(CounterContext);
    return <>
    <div style={{ border:'1px solid balck', borderRadius:'4px', padding:'12px'}}>
        <h2>Count: {count}</h2>
        <button onClick={() => updateCount(count => count+1)}>ADD</button>
    </div>
    </>
}



const ComponentB = () => {
    const {count, updateCount} = useContext(CounterContext);
    return <>
    <div style={{ border:'1px solid balck', borderRadius:'4px', padding:'12px'}}>
        <h2>Count: {count}</h2>
        <button onClick={() => updateCount(count => count+1)}>ADD</button>
    </div>
    </>
}



const ComponentC = () => {
    const {count, updateCount} = useContext(CounterContext);
    return <>
    <div style={{ border:'1px solid balck', borderRadius:'4px', padding:'12px'}}>
        <h2>Count: {count}</h2>
        <button onClick={() => updateCount(count => count+1)}>ADD</button>
    </div>
    </>
}


export const CounterApp = () => {
    return(
        <CounterProvider>
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </CounterProvider>
    )
}
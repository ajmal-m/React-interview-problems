import React, { Children, createContext, memo, use, useActionState, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";

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




const UserContext = createContext(null);

export const UserContextApp = () => {
    const [user, setUser] = useState({});
    return <>
    <UserContext.Provider value={{user, setUser}}>
        <UserForm/>
    </UserContext.Provider>
    </>
};


const  UserForm = () => {
    return <>
        <Panel title="Welcome">
            <LogInButton/>
        </Panel>
    </>
};


const LogInButton = () => {
    const {user, setUser} = useContext(UserContext);

    if(user.name){
        return  <p>You logged in as {user.name}</p>
    }
    return <>
        <button onClick={() => setUser({name:'ajmal'})}>
            Login as AJMAL
        </button>
    </>
}


const Panel = ({title, children}) => {
    return <>
        <div style={{ padding:'12px', border:'1px solid black'}}>
            <h2>{title}</h2>
            {children}
        </div>
    </>
}



// Use context challenge-Two

// Create Two context Theme and User
const ThemeContextTwo = createContext(null);
const UserContextTwo = createContext(null);

// Create Two contxet provider component
const ThemeContextTwoProvider = ({children}:any) => {
    const [darkMode, setDarkMode] = useState(false);
    return <ThemeContextTwo.Provider value={{darkMode, setDarkMode}}>
        {children}
    </ThemeContextTwo.Provider>
};

const UserContextTwoProvider = ({children}: any) => {
    const [user, setUser] = useState({});
    return <UserContextTwo.Provider value={{user, setUser}}>
        {children}
    </UserContextTwo.Provider>
};


export const UseContextChallengeTwo = () => {
    return<>
    <ThemeContextTwoProvider>
        <UserContextTwoProvider>
            <PanelTwo title={"Melcome"}>
                <LoginFormTwo/>
            </PanelTwo>
            <ToggleTwo/>
        </UserContextTwoProvider>
    </ThemeContextTwoProvider>
    </>
};

export const PanelTwo = ({ title, children }) => {
    const {darkMode,setDarkMode } = useContext(ThemeContextTwo);
    return <div style={{padding:'12px', border:'1px solid black', borderRadius:'4px', width:'300px', height:'100px', background: darkMode ? 'black' : 'white' , color:darkMode ? 'white' : 'black'}}>
        <h1 style={{margin:'0px'}}>{title}</h1>
        {children}
    </div>
};


const LoginFormTwo = () => {
    const {user, setUser} = useContext(UserContextTwo);
    return <>
    {
        user.name ? (
            <Greeting/>
        ) : (
           <LoginTwo />
        )
    }
    </>
};

const Greeting = () => {
    const {user, setUser} = useContext(UserContextTwo);
    return <>
        <p>You looged as {user.name}</p>
    </>
};


const LoginTwo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {user, setUser} = useContext(UserContextTwo);

    const isLoggable = firstName.trim() !== '' && lastName.trim() !== '' ;

    const logIn = () => {
        setUser({
            name: firstName+' '+lastName
        });
    };

    return <>
         <div>
           <label htmlFor="firstName">firstName:</label><input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstname" />
           <label htmlFor="firstName">lastname:</label><input type="text" value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} id="lastname" />
           <div>
               <button disabled={!isLoggable} onClick={logIn}>Login</button> { !isLoggable && 'Fill both Fileds'}
           </div>
        </div>
    </>
}


export const ToggleTwo = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContextTwo);
    return <>
        <input type="checkbox" name="theme" id="theme" value={darkMode} onChange={() => setDarkMode(d => !d)} />
        Use dark mode
    </>
};

const ADD_COUNT = 'add_count';
const SUB_COUNT = 'sub_count';

const reducer = (state, action) => {
    switch(action.type){
        case ADD_COUNT:
            return { count : state.count + 1};
        case SUB_COUNT:
            return { count: state.count - 1};
        default:
            return state;
    }
};


export const ReducerTest = () => {
    const [state, dispatch] = useReducer(reducer, {count: 12})
   
    return <>
        <button onClick={() => dispatch({ type: ADD_COUNT })}>+</button>
        {state.count}
        <button  onClick={() => dispatch({ type: SUB_COUNT})}>-</button>
    </>
};

const UPDATE_NAME = 'update_name';
const UPDATE_AGE = 'update_age';
type ActionType = {
    type: String,
    payload ?:any
}

const reducerTwo = ( state : any,action : ActionType) => {
    console.log(action, state)
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.payload.name};
            break;
        case UPDATE_AGE:
            return { ...state, age: state.age+1};
            break;
        default:
            return state;
            break;
    }
}

export const UserReducerChallengeTwo = () => {
    const [state, dispatch] = useReducer(reducerTwo, { name: 'Xavior', age:45});
    const updateAge = () => {
        dispatch({ type: UPDATE_AGE});
    };
    const updateName = (e : any) => {
        dispatch({ type:UPDATE_NAME, payload : { name: e.target.value}});
    }
    return <>
       <input type="text" name="Name" id="name" value={state.name}  onChange={updateName}/>
       <button type="button" onClick={updateAge}>Increment Age</button>
       <p>Hello, {state.name} You are {state.age}</p>
    </>
};


type TaskType = {
    id: number,
    task: string ,
    done : boolean
};

type PrevStateType = {
    tasks: TaskType[]
}


const ADD_TASK = 'add_task';
const DELETE_TASK = 'delete_task';
const TOGGLE_TASK = 'toggle_task';
const EDIT_TASK = 'edit_task';

const UseTask = () => {
    const reducer = (prevState : PrevStateType, action: any) => {
        try {
            switch (action.type) {
                case ADD_TASK:
                    return {
                        ...prevState,
                        tasks:[
                            ...prevState.tasks,
                            {
                                id: new Date(),
                                task : action.payload.task,
                                done:false
                            }
                        ]
                    };
                    break;
                case DELETE_TASK:
                    return {
                        ...prevState,
                        tasks: [
                            ...prevState.tasks.filter(x => x.id !== action.payload.id)
                        ]
                    };
                    break;
                case TOGGLE_TASK:
                    return {
                        ...prevState,
                        tasks:[
                            ...prevState.tasks.map((x) => {
                                if(x.id === action.payload.id) x.done = !x.done;
                                return x;
                            })
                        ]
                    }
                    break;
                case EDIT_TASK:
                    return {
                        ...prevState,
                        tasks:[
                            ...prevState.tasks.map((x) => {
                                if(x.id === action.payload.id) x.task = action.payload.task;
                                return x;
                            })
                        ]
                    };
                    break;
                default:
                    return prevState;
                    break;
            }
        } catch (error) {
            console.log(error);
            
        }
    };

    const [state, dispatch] = useReducer(reducer, { tasks:[] });

    return {state, dispatch};
}


const AddTask = ({ dispatch  }) => {
    const [task, setTask] = useState('');
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: ADD_TASK, payload:{ task }});
        setTask('');
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" placeholder="Add a Task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </>
};

const EditTask = ({task , dispatch, editTask} : {task: TaskType, dispatch: any, editTask : any}) => {
    const [editText, setEditText] = useState('');

    const saveEditTask = () => {
        dispatch({ type: EDIT_TASK, payload: { id: task.id, task:editText }});
        editTask(null);
    };


    useEffect(()=> {
        setEditText(task.task);
    }, [])

    return <>
        <input type="text" name="edit-task" value={editText} id="edit-task"  onChange={e => setEditText(e.target.value)} />
        <button onClick={saveEditTask}>Save</button>
    </>
};


const TaskItem = ({task, editTask} : {task: TaskType, editTask : any}) => {
    const updateTask = () => {
        editTask(task.id);
    };

    return <>
        {task.task}
        <button onClick={updateTask}>Edit</button>
    </>
}

const ListTask = ({tasks, dispatch} : { tasks : TaskType[], dispatch: any}) => {
    const [selectedEditTask, setEditTask] = useState(null);

    const deleteList = (task : TaskType) => {
        dispatch({ type: DELETE_TASK, payload : { id: task.id}})
    };

    const toggleUpdate = (task : TaskType) => {
        dispatch({ type: TOGGLE_TASK, payload : { id: task.id}})
    };

    return <>
    {
        tasks.length > 0 && tasks.map((task : TaskType, index : any) => (
            <div style={{ display:'flex', gap:'4px', marginTop:'22px'}} key={index}>
                <input type="checkbox" name="task" id="task" checked={task.done} onChange={() => toggleUpdate(task)}/>
                {
                    selectedEditTask ===task.id ? (
                       <EditTask task={task} dispatch={dispatch}  editTask={setEditTask}/>
                    ) : (
                        <TaskItem task={task} editTask={setEditTask}/>
                    )
                }
                <button onClick={() => deleteList(task)}>Delete</button>
            </div>
        ))
    }
    </>
}



export const UseReducerChallengeThird = () => {
    const { state, dispatch} = UseTask();
    return <>
        <AddTask dispatch={dispatch}/>
        <ListTask tasks={state.tasks} dispatch={dispatch}/>
    </>
}
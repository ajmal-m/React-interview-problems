import React, { JSX, useCallback, useState, useTransition } from "react";
import { ErrorBoundary } from 'react-error-boundary';


export const TransitionComponent = ({ title }: { title ?: string}) => {
    const [text, setText] = useState("");
    const [list, setList] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();


    const LIST_LIMIT = 10000;


    const handleChangeText = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

        startTransition(() => {
            console.log("Transition occur....")
            let lst = [];
            for(let i=0; i< LIST_LIMIT; i++){
            
                lst.push(e.target.value);
            }
            setList(lst);
        });
    }, []);
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


const TabButton = ({children, action, isActive} : { children: React.ReactNode, action : () => void, isActive : boolean}) => {

    const [isPending, startTransition] = useTransition();


    if(isActive){
        return <b>{children}</b>
    };

    const handleClick = () => {
        startTransition(async () => {
            action();
        });
    }
    return <>
        <button onClick={handleClick}>
            { isPending ? 'Loading..' : children }
        </button>
    </>
};


const AboutTab = () => {
    return <>
        <p>ABout Tab</p>
    </>
};


const ContactTab = () => {
    return <>
        <p>Contact Tab</p>
    </>
};


const PostTab = () => {
    const posts = [];

    for(let i=0; i< 500; i++){
        let j =0;
        while(j < 4000000){
            j++;
        }
        posts.push("HI")
    }
    return <>
        <p>Post Tab</p>
        <ul>
            {
                posts.map((txt , index) => (
                    <li key={index}>{txt}</li>
                ))
            }
        </ul>
    </>
};


export const TransitionChallengeTwo = () => {
    const [tab, setTab] = useState('about');
    return <>
        <TabButton
            action={() => setTab('about')}
            isActive = { tab === 'about'}
        >
            About
        </TabButton>

        <TabButton
            action={() => setTab('posts')}
            isActive = { tab === 'posts'}
        >
            Posts(SLOW)
        </TabButton>


        <TabButton
            action={() => setTab('contact')}
            isActive = { tab === 'contact'}
        >
            Contact
        </TabButton>
        <hr/>

        { tab === 'about' && <AboutTab/> }

        { tab === 'posts' && <PostTab/>}

        {tab ===  'contact'  && <ContactTab/>}
    </>
};


const addComment = () => {
   throw new Error("Comment error occur")
}

const AddCommentButton = () => {
    const [isPending, startTransition] = useTransition();
    return <>
        <button
            disabled={isPending}
            onClick={() => {
                startTransition(() => {
                    addComment();
                });
            }}
        >
            ADD COMMANT
        </button>
    </>
}


export const TransitionChallengeThree = () => {

    return <>
        <h2>Challenge Two</h2>
        <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
            <AddCommentButton/>
        </ErrorBoundary>
    </>
}




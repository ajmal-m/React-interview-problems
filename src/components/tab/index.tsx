import { useState } from "react"

export const Tabs = () => {

    const [tabs, setTabs] = useState(['Tab 1', 'Tab 2', 'Tab 3']);
    const [activeTab, setActiveTab] = useState("Tab 1")
    return(
        <>
        <Navbar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
        { activeTab === 'Tab 1'  && <TabOne/>}
        { activeTab === 'Tab 2'  && <TabTwo/>}
        { activeTab === 'Tab 3'  && <TabThree/>}

        </>
    )
};

const Navbar = ({ tabs, activeTab, setActiveTab} : { tabs : string[], activeTab: string, setActiveTab: (tab: string) => void}) => {
    return(
        <div style={{ display:'flex'}}>
            {
                tabs.map((item) => (
                    <button style={{
                        background:`${activeTab === item ? 'red' : 'black'}`,
                        color:'white',
                        padding:"12px",
                        border:'1px solid green',
                        cursor:'pointer'
                    }} onClick={() => setActiveTab(item)}>
                        {item}
                    </button>
                ))
            }
        </div>
    )
}


const TabOne =() => {
    return(
        <div>
            <h2>Tab One</h2>
        </div>
    )
};

const TabTwo =() => {
    return(
        <div>
            <h2>Tab Two</h2>
        </div>
    )
}


const TabThree =() => {
    return(
        <div>
            <h2 style={{color:"blue", fontSize:'42px'}}>Tab Three</h2>
        </div>
    )
}
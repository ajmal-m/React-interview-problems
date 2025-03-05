import { useState } from "react";
import { MenuList } from "./menu-list";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import './index.css'



type NavData = {
    label: string,
    link: string,
    children?: NavData[] | null
}

type SelectedChild = Record<any, any>


export const MenuItem = ({
    menu = {
        label:'',
        link:''
    }
}:{ menu: NavData} ) => {

    const [selectedChild, setSelectChild] = useState<SelectedChild>({});

    const toggleHandler = (label: string) => {
        setSelectChild((prev) => ({
            ...prev,
            [label]:! selectedChild[label]
        }))
    }
    return(
        <>
            <div style={{ display:'flex', gap:'10px'}} onClick={() => toggleHandler(menu.label)}>
                {
                    selectedChild[menu.label] && menu?.children && menu?.children?.length > 0 ?
                    <FaMinus/> : <FaPlus/>
                }
                <li style={{ cursor:'pointer'}}>{menu.label}</li>
            </div>
            {
                menu && menu?.children && menu?.children?.length > 0 && selectedChild[menu.label]  ? (
                    <MenuList list={menu.children}/>
                ) : null
            }
        </>
    )
}
import React from "react";
import {MenuList} from './menu-list';

type NavData = {
    label: string,
    link: string,
    children?: NavData[] | null
}


export const TreeViewStructure = ({ menus = [] } : { menus:NavData[] }) => {
    return (
        <MenuList list={menus}/>
    )
}
import { MenuItem } from "./menu-item"


type NavData = {
    label: string,
    link: string,
    children?: NavData[] | null
}


export const MenuList = ({
    list = []
}: {
    list: NavData[]
}) => {
    return(
        <ul>
            {
                list.map((menuItem, index) => (
                    <MenuItem menu={menuItem} key={index}/>
                ))
            }
        </ul>
    )
}
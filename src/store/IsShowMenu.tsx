import {createContext, ReactNode, useState} from "react";

export const IsShowMenu = createContext({
    showMenu: false,
    menuToggle: ()=>{}
})
interface Props{
    children: ReactNode
}
export function SliderMenuContextProvider(props:Props){
    const [menuState, setMenuState] = useState(false)
    const menuToggle = ()=>{
        menuState?setMenuState(false):setMenuState(true);
    }
    return(
        <IsShowMenu.Provider value={{showMenu: menuState, menuToggle:menuToggle}}>
            {props.children}
        </IsShowMenu.Provider>
    )
}
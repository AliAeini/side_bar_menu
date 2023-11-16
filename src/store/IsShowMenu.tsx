import {createContext, useState} from "react";

export const IsShowMenu = createContext({
    isShowMenu: false,
 
})

export function SliderMenuContextProvider(){
    const [menuState, setMenuState] = useState(false)

    return(
        <IsShowMenu.Provider value={}></IsShowMenu.Provider>
    )
}
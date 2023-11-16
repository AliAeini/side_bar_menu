import {HeaderMenu} from "@/components/sideBarMenu/HeaderMenu";
import {SliderMenu} from "@/components/sideBarMenu/SliderMenu";
import {useState} from "react";

export function SideBarMenu(){
    const [menuState, setMenuState] = useState(false)
    const menuToggle = (): any => {
        menuState ? setMenuState(false) : setMenuState(true)
    }
    return(
        <>
            <div className={"h-[100vh] flex flex-col z-1"}>
                <HeaderMenu menuState={menuState} menuToggle={menuToggle}/>
                {menuState && <SliderMenu/>}
            </div>
        </>
    )
}
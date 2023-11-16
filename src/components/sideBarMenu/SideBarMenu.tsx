import {HeaderMenu} from "@/components/sideBarMenu/HeaderMenu";
import {SliderMenu} from "@/components/sideBarMenu/SliderMenu";
import {IsShowMenu} from "@/store/IsShowMenu";
import {useContext} from "react";

export function SideBarMenu(){
    const show_menu = useContext(IsShowMenu)
    return(
        <>
            <div className={"h-[100vh] flex flex-col z-1"}>
                <HeaderMenu/>
                {show_menu.showMenu && <SliderMenu/>}
            </div>
        </>
    )
}
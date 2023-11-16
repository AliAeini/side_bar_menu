import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";


export function TopLine(){
    const [menuState, setMenuState] = useState(false)
    const MenuToggle = (e:any)=>{
        menuState?setMenuState(false):setMenuState(true);
    }

    return (
        <div className={"w-full bg-gray-300 p-2 text-end"}>
            {menuState && <FontAwesomeIcon icon={faXmark} className={"text-[24px]"} onClick={MenuToggle}/>}
            {!menuState && <FontAwesomeIcon icon={faBars} className={"text-[24px]"} onClick={MenuToggle}/>}
        </div>
    )
}

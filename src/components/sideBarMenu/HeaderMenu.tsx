import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {useContext} from "react";
import {IsShowMenu} from '@/store/IsShowMenu';

export function HeaderMenu(){
    const show_menu = useContext(IsShowMenu)
    function MenuBtnToggle(){
        show_menu.menuToggle()
    }
    return (
        <div className={"w-full bg-gray-300 p-2 text-end"} id={"menu_btn"}>
            {show_menu.showMenu && <FontAwesomeIcon icon={faXmark} onClick={MenuBtnToggle} className={"text-[24px]"}/>}
            {!show_menu.showMenu && <FontAwesomeIcon icon={faBars} onClick={MenuBtnToggle} className={"text-[24px]"}/>}
        </div>
    )
}



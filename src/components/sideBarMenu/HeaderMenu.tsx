import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';

interface Props{
    menuState : boolean,
    menuToggle: () => {}
}
export function HeaderMenu({menuState, menuToggle}:Props){
    return (
        <div className={"w-full bg-gray-300 p-2 text-end"} id={"menu_btn"}>
            {<FontAwesomeIcon icon={menuState ? faXmark : faBars} className={"text-[24px]"} onClick={menuToggle}/>}
        </div>
    )
}



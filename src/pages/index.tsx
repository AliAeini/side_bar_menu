import {SideBarMenu} from "@/components/sideBarMenu/SideBarMenu";
import {SliderMenuContextProvider} from "@/store/IsShowMenu";

export default function Home() {
    return (
        <main>
            <SliderMenuContextProvider>
                <SideBarMenu/>
            </SliderMenuContextProvider>
        </main>
    )
}

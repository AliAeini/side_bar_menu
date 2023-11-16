import {SliderMenuItems} from "@/components/sideBarMenu/SliderMenuItems";

export function SliderMenu(){
    return (
        <ul className={"flex flex-col gap-6 justify-around p-4 bg-gray-300 w-full sm:w-[80%]  m-auto mr-0 border-t flex-grow"}>
            <SliderMenuItems/>
        </ul>
    )
}
export function SliderMenu(){
    return (
        <ul className={"flex flex-col gap-6 justify-around p-4 bg-gray-300 w-full sm:w-[80%]  m-auto mr-0 border-t flex-grow"}>
            <li><a href="#">Home</a></li>
            <li><a href="#">All Courses</a></li>
            <li><a href="#">Free Courses</a></li>
            <li><a href="#">Srevices</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
    )
}
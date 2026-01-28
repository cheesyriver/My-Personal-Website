import ThemeToggle from "./ThemeToggle"

function NavBar(){
    return(
        <>
            <nav className="flex flex-row items-center justify-between px-[50px] py-[25px] mx-[250px] my-[0px]">
                <div className="text-[20px] font-[500] py-[5px] px-[10px] cursor-default select-none">
                    Joshua Defredes
                </div>
                    <ul className="flex items-center justify-center flex-row gap-[10px]">
                        <li className="text-[20px] list-none px-[10px] rounded-[50px] py-[5px] hover:bg-(--base-variant) hover:cursor-pointer">Home</li>
                        <li className="text-[20px] list-none px-[10px] rounded-[50px] py-[5px] hover:bg-(--base-variant) hover:cursor-pointer">Projects</li>
                        <li className="text-[20px] list-none px-[10px] rounded-[50px] py-[5px] hover:bg-(--base-variant) hover:cursor-pointer">About Me</li>
                        <ThemeToggle />
                    </ul> 
            </nav>

            <hr className="block h-[1px] rounded-[1px] mx-[200px]" />
        </>
    )
}

export default NavBar
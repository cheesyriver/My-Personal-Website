import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-[50px] py-[25px] mx-[250px] my-[0px]">
        <Link href="/" className="text-[20px] font-[500] py-[5px] px-[10px] cursor-pointer select-none">
          Joshua Defredes
        </Link>
        
        <ul className="flex items-center justify-center flex-row gap-[10px]">
          <li className="list-none hover:bg-(--base-variant) rounded-[50px] cursor-pointer">
            <Link href="/" className="inline-block text-[20px] px-[10px] py-[5px]">
              Home
            </Link>
          </li>

          <li className="list-none hover:bg-(--base-variant) rounded-[50px] cursor-pointer">
            <Link href="/projects" className="inline-block text-[20px] px-[10px] py-[5px]">
              Projects
            </Link>
          </li>

          <li className="list-none hover:bg-(--base-variant) rounded-[50px] cursor-pointer">
            <Link href="/about" className="inline-block text-[20px] px-[10px] py-[5px]">
              About Me
            </Link>
          </li>
          
          <ThemeToggle />
        </ul>
      </nav>

      <hr className="block h-[1px] rounded-[1px] mx-[200px] mb-[5vh]" />
    </>
  );
}

export default NavBar;
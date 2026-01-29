import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-row items-center justify-evenly px-[30px] py-[10px] mx-auto w-max min-w-[20vw] bg-(--opaque-color) backdrop-blur-md border border-(--border-color) rounded-full shadow-lg mt-5">
        <ul className="flex items-center justify-center flex-row gap-[10px]">
          <li className="list-none hover:bg-(--base-variant) rounded-[50px] cursor-pointer transition-all duration-[0.4s]">
            <Link href="/" className="inline-block text-[18px] px-[15px] py-[8px]">
              Home
            </Link>
          </li>

          <li className="list-none hover:bg-(--base-variant) rounded-[50px] cursor-pointer transition-all duration-[0.4s]">
            <Link href="/projects" className="inline-block text-[18px] px-[15px] py-[8px]">
              Projects
            </Link>
          </li>

          <li className="list-none hover:bg-(--base-variant) rounded-[50px] cursor-pointer transition-all duration-[0.4s]">
            <Link href="/about" className="inline-block text-[18px] px-[15px] py-[8px]">
              About Me
            </Link>
          </li>
          
          <ThemeToggle />
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
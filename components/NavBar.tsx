
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";
import Drawer from "./Drawer";

interface Props {
  showMenu?: boolean
}

export default function NavBar ({showMenu = true}: Props) {
  return (
    <nav className={clsx(
      ["flex gap-5 items-center p-5 h-12 z-10 relative bg-neutral-100 dark:bg-neutral-900"]
      )}>
      <div className="text-2xl font-bold"><Link href="/">Farly</Link></div>
      {showMenu && <ul className="hidden md:flex gap-5">
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/portfolio">Portfolio</Link></li>
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/project">Project</Link></li>
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/about">About</Link></li>
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/contact">Contact</Link></li>
      </ul>}
      <div className="flex flex-nowrap items-center gap-3 ml-auto">
        <ThemeToggle/>
        <Drawer/>
      </div>
    </nav>
  );
}
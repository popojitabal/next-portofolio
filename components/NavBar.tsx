import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

export default function NavBar () {
  return (
    <nav className={clsx(
      ["flex gap-5 items-center p-5 h-12 z-50"]
      )}>
      <div className="text-2xl font-bold"><Link href="/">Farly</Link></div>
      <ul className="hidden md:flex gap-5 mr-auto">
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/portfolio">Portfolio</Link></li>
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/project">Project</Link></li>
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/about">About</Link></li>
        <li className="hover:scale-150 transition-transform duration-300"><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="flex flex-nowrap items-center gap-3">
        <ThemeToggle/>
        <button className="md:hidden block">☰</button>
      </div>
    </nav>
  );
}
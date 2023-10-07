"use client"
import { navLinks } from "@/lib/data"
import Link from "next/link"

export default function nav() {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-gray-400 border-opacity-40 bg-gray-950 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full -translate-x-1/2">
        <nav className="fixed top-[0.15rem] h-[4rem] sm:h-[2.75rem] my-auto left-1/2 -translate-x-1/2">
          <ul className="flex w-[22rem] flex-wrap h-full items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:w-[initial] sm:gap-5">
            {navLinks.map(link => {
              return <li key={link.href}>
                <Link href={link.href} className="flex justify-center items-center px-5 py-3 text-gray-400 hover:text-gray-100 transition">
                  {link.name}
                </Link>
              </li>
            })}
          </ul>
        </nav>
      </div>
      <div className="fixed top-0 right-[2.5rem] rounded-full border border-gray-400 border-opacity-40 bg-gray-950 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 hidden lg:block">
        <Link href={'#login'} className="flex justify-center items-center px-3 py-3 text-gray-400 hover:text-gray-100 transition">Login</Link>
      </div>
    </header>
  )
}

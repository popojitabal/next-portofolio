"use client"
import clsx from "clsx";
import NavBar from "./NavBar";

export default function BaseLayout ({children, ...props}: any) {
  return <div className={clsx(["min-w-full text-neutral-900 dark:text-neutral-50 relative", props?.className])}>
    <NavBar/>
    <div className="h-screen w-screen -mt-12 bg-neutral-100 dark:bg-neutral-900 -z-50 transition-colors duration-700 ease-in-out relative">
      {children}
    </div>
  </div>
}
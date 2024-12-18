import clsx from "clsx";
import NavBar from "./NavBar";
import { ThemeProvider } from "next-themes";

export default function BaseLayout ({children, ...props}: any) {
  return <ThemeProvider attribute="class" defaultTheme="system">
    <div className={clsx(["min-w-full text-neutral-900 dark:text-neutral-50 relative z-0", props?.className])}>
      <NavBar showMenu={false}/>
      <div className="h-screen w-screen -mt-12 py-12 md:px-5 bg-neutral-100 dark:bg-neutral-900 z-0 transition-colors duration-700 ease-in-out relative overflow-x-hidden overflow-y-auto scroll-smooth">
        {children}
      </div>
    </div>
  </ThemeProvider>
}
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
export default function Project () {
  const projects:any[] = [
    {
      title: 'Testing',
      src: '#',
      link: 'http://localhost:3000'
    },
    {
      title: 'Testing',
      src: '#',
      link: 'http://localhost:3000'
    },
    {
      title: 'Testing',
      src: '#',
      link: 'http://localhost:3000'
    },
    {
      title: 'Testing',
      src: '#',
      link: 'http://localhost:3000'
    }
  ]

  return <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{ duration: 0.5 }}>
  <div className="w-full flex flex-col min-w-[50%]">
    <div className="flex justify-between w-full items-end p-3 md:p-0">
      <div className="text-2xl font-bold">My Projects</div>
      <div className="relative scale-100 hover:scale-105 transition-transform duration-300 ease-in-out text-sky-600">
        <u><Link href={'/project'}>See More</Link></u>
      </div>
    </div>
    <div className="w-full -mr-4 p-3 flex md:flex-nowrap flex-wrap items-center justify-center gap-3 relative">
      {projects.map((project, index:number) => <div key={'projects'+index} className="w-full md:w-[256px] min-w-[256px] h-[168px] bg-neutral-200 dark:bg-neutral-600 flex flex-col items-end relative transition-all ease-in-out duration-300 scale-100 hover:scale-105">
        <div className="mt-auto w-full p-3">
          {project.title} {index+1}
        </div>
      </div>)}
    </div>
  </div>
</motion.div>
}
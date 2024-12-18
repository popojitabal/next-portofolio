"use client"
import { motion } from "framer-motion";
export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.5 }}>
      <div className=" w-full h-screen md:h-full flexn min-w-full md:min-w-[50%]">
        <div className="flex flex-col gap-3 md:gap-5 py-52 px-12 md:px-52">
          <div className="text-md md:text-2xl">Hi! My name is <span className="font-bold bg-sky-600 text-neutral-50 px-2 py-1 rounded-md">Farly</span></div>
          <div className="text-2xl md:text-7xl">I'm a <span className="text-sky-600">Web Developer</span></div>
        </div>
      </div>
    </motion.div>
  )
}
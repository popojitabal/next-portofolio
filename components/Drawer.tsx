"use client"
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XCircleIcon, XIcon } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Drawer () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlideOver = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Button to open SlideOver */}
      <button
        onClick={toggleSlideOver}
        className="p-2 rounded-full block md:hidden hover:bg-neutral-200 dark:hover:bg-neutral-700"
      >
        <MenuIcon className="h-4 w-4"/>
      </button>

      {/* SlideOver */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-gray-500/75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Slide-over panel */}
            <motion.div
              className="fixed inset-0 overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <motion.div
                    className="pointer-events-auto relative w-screen max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Close button */}
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={toggleSlideOver}
                        className="relative rounded-full bg-neutral-100 dark:bg-neutral-800 p-1"
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-4 w-4"/>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex h-full flex-col overflow-y-scroll bg-neutral-50 dark:bg-neutral-900 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <h2
                          className="text-base font-semibold"
                          id="slide-over-title"
                        >
                          Menu
                        </h2>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <ThemeToggle label={true} className="m-auto"/>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

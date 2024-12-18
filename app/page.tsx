import BaseLayout from "@/components/BaseLayout";
import Landing from "@/components/sections/Landing";
import Project from "@/components/sections/Project";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout>
    <AnimatePresence>
      <div className="flex flex-col items-center gap-5 overflow-auto relative">
        <Landing/>
        <Project/>
      </div>
    </AnimatePresence>

    </BaseLayout>
  );
}

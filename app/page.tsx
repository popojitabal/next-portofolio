import BaseLayout from "@/components/BaseLayout";
import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout>
      <div className="w-full h-full flex">
        <div className="flex flex-col justify-center gap-5 p-52">
          <div className="text-2xl">Hi! My name is <span className="font-bold bg-sky-600 text-neutral-50 px-2 py-1 rounded-md">Farly</span></div>
          <div className="text-7xl">I'm a <span className="text-sky-600">Website Developer</span></div>
        </div>
      </div>
    </BaseLayout>
  );
}

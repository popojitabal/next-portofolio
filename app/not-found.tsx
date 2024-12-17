import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";

export default function NotFound () {
  return (
    <BaseLayout>
      <div className="w-screen h-screen flex justify-center items-center gap-2">
        <span>Page Not Found</span> <span>|</span> <u className="hover:text-neutral-400 cursor-pointer"><Link href={'/'}>Go Back</Link></u>
      </div>
    </BaseLayout>
  )
}
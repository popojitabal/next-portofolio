import { intro } from "@/lib/data"

export default function home () {
  return (
    <div className='flex flex-col min-h-screen justify-center text-gray-300 px-[3rem]'>
        <div id='hello' className='text-4xl font-medium'>
            Hi! My name is {intro.nickname}.
        </div>
        <hr className="my-[2rem] border-gray-500"/>
        <div id='description' className='text-2xl text-gray-400 py-2'>
            {`I am a software developer from Manado, Indonesia. `}
            {intro.current_office && <span>Currently work as a developer team in the field of {intro.current_office.position} at <a className="transition underline hover:text-gray-50" target="_blank" href={intro.current_office.web}>{intro.current_office.name}</a>.</span>}
            {intro.hobbies && <span> In my free time, i enjoy {intro.hobbies.join(', ')}.</span>}
            {intro.tools && <span>My prefered tools are {intro.tools.join(', ')}.</span>} 
        </div>
    </div>
  )
}

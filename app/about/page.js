import React from 'react'
import { about } from '@/lib/data'
export default function index() {
    return (
        <div className='flex flex-col min-h-screen justify-center text-gray-300'>
            <div className="relative top-0 mt-[10rem]">
                <div className=''>
                    <h3 className="text-center text-3xl font-semibold leading-7 text-gray-50">About Me</h3>
                </div>
                <div className="px-4 sm:px-0 mt-[5rem]">
                    <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-400">Personal details.</p>
                </div>
                <div className="mt-6 border-t border-white/10">
                    <dl className="divide-y divide-white/10">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-50">Full name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{about.detail.fullname}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-50">Degree</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{about.detail.degree}</dd>
                        </div>
                    </dl>
                </div>
                
                <div className="px-4 sm:px-0 mt-[5rem]">
                    <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-400">Experience.</p>
                </div>
                <div className="mt-6 border-t border-white/10">
                    <dl className="divide-y divide-white/10">
                        {about.experience.map((exp) => <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-50">
                                <span className='text-gray-500'>{exp.year.start} - {exp.year.end}</span>
                                <br/>
                                <span>{exp.title}</span>
                                <br/>
                                <a href={exp.web} className='text-gray-500 hover:text-gray-50 transition'>{exp.office}</a>
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                                <div className='mb-[1rem]'>
                                    {exp.description}
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {exp.tools.map(tool => <span className='rounded-md bg-gray-800 text-gray-300 px-2'>{tool}</span>)}
                                </div>
                            </dd>
                        </div>)}
                    </dl>
                </div>
                <div className="px-4 sm:px-0 mt-[5rem]">
                    <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-400">Contacts.</p>
                </div>
                <div className="mt-6 border-t border-white/10 mb-[5rem]">
                    <dl className="divide-y divide-white/10">
                        {about.contacts.map((contact) => <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-50">{contact.media}</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                                <a href={contact.link} className='hover:text-gray-50 underline transition'>{contact.username}</a>
                            </dd>
                        </div>)}
                    </dl>
                </div>
            </div>
        </div>
    )
}


import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (
        <>
            <div className="wrapper w-full bg-zinc-700 rounded-3xl font-['Neue_Montreal'] relative">
                <h1 className='border-b-[1px] text-6xl px-[4vw] border-zinc-500 textzinc-200 pt-[15vh] pb-[5vh] font-light'>Featured projects</h1>

                <div className='cards p-[4vw] flex gap-5 flex-wrap'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                </div>


                <div className='flex pb-[6vw] justify-around'>
                <a href="#" className='hoverObj1 flex items-center bg-zinc-800 text-zinc-200 w-min p-4 rounded-full' id=''>
                    <p className='uppercase w-max text-md pl-1'>view all case studies</p>
                    <div className='arrowObj rounded-full w-[10px] h-[10px] bg-white ml-12 mr-2 text-black flex justify-center'><MdArrowOutward className='arrowIcon' /></div>
                </a>
                </div>
            </div>
        </>
    )
}

export default Projects
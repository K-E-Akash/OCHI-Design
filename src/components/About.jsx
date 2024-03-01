import React, { useState } from 'react'
import 'C:/Users/User/Desktop/Projects/OchiDesign/src/App.css'
import { MdArrowOutward } from "react-icons/md";


const About = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <div className="bg-[#CDEA68] text-zinc-900 pt-10 rounded-t-3xl h-min font-['Neue_Montreal'] rounded-3xl">
                <div className="sec1 p-[4vw] text-[3.5vw] w-[84%] leading-[4vw] tracking-tight">
                    Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
                </div>

                <div className="sec2 mt-3 border-t-[1px] border-zinc-600 px-[4vw] py-[1.5vw] flex justify-between w-full  text-[1.15vw] tracking-tighter mb-20">
                    <div className="subSec w-1/2">What you can expect:</div>
                    <div className="subSec w-1/4 pr-10">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people. <br /><br />
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>
                    <div className="subSec w-1/4 flex justify-around">
                        <div className='flex flex-col w-min self-end'>
                            <p>S:</p>
                            <br />
                            {['Instagram', 'Behancee', 'Facebook', 'LinkedIn'].map((e, i) => (
                                <a className='underline w-min' key={i}>{e}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sec3 border-t-[1px] pt-7 border-zinc-600 px-[4vw] flex flex-row pb-16">
                    <div className="secLeft w-1/2">
                        <h1 className='text-6xl'>Our approach:</h1>
                        <a href="#" className='hoverObj1 flex items-center bg-zinc-800 text-zinc-200 w-min p-4 rounded-full mt-4' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                            <p className='uppercase w-max text-md pl-1'>read more</p>
                            <div className='arrowObj rounded-full w-[10px] h-[10px] bg-white ml-12 mr-2 text-black flex justify-center'><MdArrowOutward className='arrowIcon' /></div>
                        </a>
                    </div>

                    <div className="secRight w-1/2 -mt-8 max-w-full ">
                        <div className={`rounded-[.8vw] ${isHovered ? 'hovered' : ''}`} id='hoverCont'>
                            <img id='hoverImg' className={`rounded-[.8vw] ${isHovered ? 'hoveredImg' : ''}`} src="src\public\images\secRight-sec3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
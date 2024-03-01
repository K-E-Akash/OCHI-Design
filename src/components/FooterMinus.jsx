import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

function FooterMinus() {
    return (
        <>
            <div className="footerMinus w-full min-h-screen bg-[#CDEA68] py-36">
                <div>
                    {['ready', 'to start', 'the project'].map((e, i) => (
                        <div className="uppercase text-zinc-800 text-[15vw] leading-[11.2vw] text-center font-['Test_Founders_Grotesk_X_Condensed']" key={i}>{e}{i === 2 && <span className="text-[15.5vw] font-['Neue_montreal'] font-extrabold">?</span>}</div>
                    ))}
                </div>

                <a href="#" className='hoverObj1 flex items-center bg-zinc-800 text-zinc-200 w-min p-4 rounded-full mt-12'>
                    <p className="uppercase w-max text-md pl-1 font-['Neue_montreal']">Start the project</p>
                    <div className='arrowObj rounded-full w-[10px] h-[10px] bg-white ml-10 mr-2 text-black flex justify-center'><MdArrowOutward className='arrowIcon' /></div>
                </a>
                <p className='text-zinc-800 pt-5 text-lg'>OR</p>
                <a href="#" className='flex items-center w-min p-4 rounded-full mt-4' id='footerMinusBtn'>
                    <p className="uppercase w-max text-md pl-1 font-['Neue_montreal']">Hello@ochi.design</p>
                    <div className='rounded-full w-[10px] h-[10px] ml-10 mr-2 flex justify-center'><MdArrowOutward className='arrowIcon' /></div>
                </a>
            </div>
        </>
    )
}

export default FooterMinus
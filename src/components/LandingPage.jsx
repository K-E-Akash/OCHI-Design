import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const LandingPage = () => {
    return (
        <div className='w-full h-screen bg-zinc-800 text-white pt-1'>
            <div className="textStructure mt-40">
                {['We Create', 'Eye-Opening', 'Presentations'].map((item, index) => (
                    <div className="masker flex ml-[4vw]">
                        <div className='pt-4'>
                            {index === 1 && (<motion.div  
                            initial={{ width: 0 }}
                            animate={{ width: '8.5vw' }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                            className='bg-green-200 overflow-hidden w-[8.5vw] h-[11.5vh] mr-4 rounded' key={index}><img className='w-full h-full' src="public/images/bg.jpg" alt="" /></motion.div>)}
                        </div>
                        <h1 key={index} className={`uppercase text-9xl font-['Test_Founders_Grotesk_X_Condensed'] leading-[0.78]`}>{item}</h1>
                    </div>
                ))}
            </div>

            <div className="pageFooter flex justify-between mx-[4vw] border-t-[1px] border-zinc-500 mt-[15vh] pt-4">
                {['For public and private companies', 'From the first pitch to IPO'].map((e, i) => (
                    <p className='text-width px-1 text-zinc-200' key={i}>{e}</p>
                ))}
                <div className='flex gap-1'>
                    <div className='border-[1px] transition ease-in-out duration-500 border-zinc-400 rounded-full py-1 px-3 hover:bg-zinc-200 hover:text-black uppercase'>Start the project</div>
                    <div className='border-[1px] transition ease-in-out duration-500 border-zinc-400 rounded-full px-2 pt-2 hover:bg-zinc-200 hover:text-black'><MdArrowOutward /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
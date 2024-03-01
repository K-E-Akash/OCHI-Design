import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <>
      <div className="w-full bg-[#004D43] pt-[15vh] pb-[8vw] rounded-t-3xl overflow-hidden">
        <motion.div className="text text-orange-100 flex whitespace-nowrap"
        initial={{x: 0}}
        animate={{ x:'-100%'}}
        transition={{repeat: Infinity, duration: 10, ease: 'linear' }}>
          {["we are ochi", "we are ochi"].map((e, i) => (
            <h1 className="text-[26vw] leading-[15vw] uppercase font-['Test_Founders_Grotesk_X_Condensed'] pb-12 text-[#FFFFFF] border-t-[1px] border-b-[1px] border-[#ffffff9b] pr-20">{e}</h1>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Marquee
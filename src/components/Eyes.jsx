import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=> {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle - 180);
        })
    })

    return (
        <div  className='w-full min-h-screen relative'>
            <img className='w-full h-full' src="src/public/images/Top-View.jpg" alt="" />
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-index-[20]'>
                <div className='w-[15vw] h-[15vw] bg-[#F6F6F6] flex items-center justify-center rounded-full'>
                    <div className='w-[10vw] h-[10vw] bg-zinc-800 rounded-full relative'>
                        <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} className='line w-full h-8 absolute top-[50%] -translate-y-[50%]'>
                            <div className='w-8 h-8 bg-[#F6F6F6] rounded-full'>
                            </div>
                        </div>
                        <p className='flex translate-x-[60px] translate-y-[60px]'>PLAY</p>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-[#F6F6F6] rounded-full flex items-center justify-center'>
                    <div className='w-[10vw] h-[10vw] bg-zinc-800 rounded-full relative'>
                    <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} className='line w-full h-8 absolute top-[50%] -translate-y-[50%]'>
                            <div className='w-8 h-8 bg-[#F6F6F6] rounded-full'></div>
                        </div>
                        <p className='flex translate-x-[60px] translate-y-[60px]'>PLAY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
import React from 'react'

const ProjectCard = () => {
    return (
        <>
            <div className='Card'>
                <div className="title flex items-center gap-3 mb-5">
                    <div className='dot w-2 h-2 bg-zinc-300 rounded-full'></div>
                    <div className='projectName'>FYDE</div>
                </div>
                <div className="cardBody w-[45vw] h-[80vh] bg-slate-600 rounded-2xl overflow-hidden hover:scale-95 transition ease-in duration-[0.5s]">
                    <img className="cardImg w-full h-full hover:scale-110 transition ease-in duration-[0.5s]" src="images/Fyde.png" alt="" />
                </div>
                <div className='servicesBtnCont mb-10'>
                    {[].map((e, i) => (
                        <div className="servicesBtnT1">{e}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectCard
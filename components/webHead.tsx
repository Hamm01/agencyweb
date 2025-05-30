import React from 'react'
import Image from 'next/image'

const AgencyHead: React.FC = () => {
    return (
        <div className='min-h-screen  flex flex-col justify-center items-center'>
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                {/* <source src="/assets/snaphead-bg.m4v" type="video/mp4; codecs=hvc1" /> */}
                <source src="/assets/snaphead-bg.webm" type="video/webm; codecs=vp9" />
            </video>
            <div className="flex-grow-0 pt-10 transition-opacity  duration-1000 z-10 ">
                <Image src="/assets/hklogowhite.png" width={128 / 2} height={114 / 2} alt="logo"></Image>
            </div>
            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center'>

                <h1 className='mb-6 text-4xl xl:text-5xl'>Himanish Portfolio</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>Full Stack Developer </span><br />
                    <span>App Devlopement, </span>
                    <span>done right.</span>
                </h2>
            </div>
            <div className="flex-grow-0 pt-20 md:pb-10 transition-all  duration-1000 z-10 ">
                <Image src="/assets/arrow-down.png" width={188 / 3} height={105 / 3} alt="logo"></Image>
            </div>
        </div>
    )

}

export default AgencyHead
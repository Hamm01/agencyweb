import React, { useState, useRef, useCallback, useContext } from 'react'
import Image from 'next/image'
import { ScrollContext } from '../utils/scroll-observer'

const AgencyHead: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)
    let progress = 0
    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }
    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])
    return (
        <div ref={refContainer} className='min-h-screen sticky top-0 -z-10 flex flex-col justify-center items-center' style={{ transform: `translateY(-${progress * 20}vh )` }}>
            <video autoPlay muted playsInline className='absolute w-full h-full object-cover'>
                {/* <source src="/assets/snaphead-bg.m4v" type="video/mp4; codecs=hvc1" /> */}
                <source src="/assets/snaphead-bg.webm" type="video/webm; codecs=vp9" />
            </video>
            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 z-10 ${imageLoaded ? 'opacity-100' : 'opacity-0'} `}>
                <Image src="/assets/hklogowhite.png" width={128 / 2} height={114 / 2} alt="logo" ></Image>
            </div>
            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center'>

                <h1 className={`mb-6 text-3xl xl:text-6xl translate-opacity duration-500  ease-in-out  ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>Himanish Portfolio</h1>
                <h2 className={`mb-2 text-xl xl:text-4xl tracking-tight translate-opacity duration-500 ease-in-out   ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <span>Full Stack Developer </span><br />
                    <span>App Devlopement, </span>
                    <span>done right.</span>
                </h2>
            </div>
            <div className={`flex-grow-0 pb-20 md:pb-10 transition-all  duration-1000 z-10  ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-20'}  `}>
                <Image src="/assets/arrow-down.png" width={188 / 3} height={105 / 3} alt="scroll-down" onLoad={handleImageLoaded}></Image>
            </div>
        </div>
    )

}

export default AgencyHead
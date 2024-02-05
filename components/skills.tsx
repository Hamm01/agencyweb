import React, { useContext, useRef } from 'react'
import s from '../styles/skills.module.css'
import { ScrollContext } from '../utils/scroll-observer'
const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}
const styleForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo;
    const opacity = progress >= 0 && progress < 1 ? 1 : 0.2;
    const translateY = 50 - Math.min(1, Math.max(0, progress)) * 50; // from 50px to 0px
    return {
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    };
};
const Skills: React.FC = () => {

    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const noOfPages = 3
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight

        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(noOfPages - 0.5, Math.max(0.5, percentY * noOfPages))
        console.log("clientHeight ", clientHeight)
        console.log("offsetTop ", offsetTop)
        console.log("screenH ", screenH)
        console.log("scrollY ", scrollY)
        console.log("percentY ", percentY)
        console.log("progress ", progress)
    }
    return (
        <div ref={refContainer} className="bg-black text-white">
            <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center font-semibold text-4xl md:text-6xl lg:text-7xl tracking-tight">
                <div className="leading-[1.15] ">
                    <div className={`${s.skillText}`} style={{ opacity: opacityForBlock(progress, 0) }}>
                        I know my tools inside out as full stack developer
                    </div>
                    <span className={`${s.skillText} inline-block after:content-['_']`} style={{ opacity: opacityForBlock(progress, 1) }}>
                        My work delivers high-performing, user-friendly websites and long-term scalability....
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 2) }}>
                        My focus on crafting smooth user experiences supported by reliable backend architecture.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills
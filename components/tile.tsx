import React, { useRef, useContext, Children } from 'react'
import { ScrollContext } from '../utils/scroll-observer'


interface WrapperProps {
    children: React.ReactNode
    numOfPages: number
}

interface TileContextValue {
    numOfPages: number
    currentPage: number
}

export const TileContext = React.createContext<TileContextValue>({ numOfPages: 0, currentPage: 0 })


export const TileWrapper: React.FC<WrapperProps> = ({ children, numOfPages }) => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
    let currentPage = 0
    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        currentPage = percentY * numOfPages

        console.log("clientHeight ", clientHeight)
        console.log("scrollY ", scrollY)
        console.log("screenH ", screenH)
        console.log("offsetTop ", offsetTop)
        console.log("percentY ", percentY)
        console.log("numOfPages ", numOfPages)
        console.log("currentPage ", currentPage)

    }

    return (
        <TileContext.Provider value={{ numOfPages, currentPage }} >
            <div ref={refContainer} className='bg-black relative text-white ' style={{ height: numOfPages * 100 + 'vh' }}>
                {children}
            </div>
        </TileContext.Provider>)
}


export const TileBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="absolute h-full w-full">{children}</div>
)

export const TileContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>)

interface Props {
    page: number
    renderContent: (props: { progress: number }) => any
}
export const Tile: React.FC<Props> = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(TileContext)
    const progress = Math.max(0, currentPage - page)
    const refContainer = useRef<HTMLDivElement>(null)

    let opacity = Math.min(1, Math.max(0, progress * 4))
    if (progress > 0.85 && page < numOfPages - 1) {
        opacity = Math.max(0, (1.0 - progress) * 4)
    }

    console.log("progress ", progress)
    console.log("opacity ", opacity)
    return (
        <div ref={refContainer} className="absolute top-0 w-full" style={{
            pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
            opacity

        }}>
            {renderContent({ progress })}
        </div>

    )
}
import React, { useCallback, useContext, useEffect, useState } from 'react'

interface ScrollValue {
    innerWidth: number

}

export const SizeContext = React.createContext<ScrollValue>({ innerWidth: 0 })

export function getInnerWidth() {

    const { innerWidth } = useContext(SizeContext)

    return innerWidth
}

const SizeObserver: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [innerWidth, setInnerWidth] = useState(0)
    const handleResize = useCallback(() => {

        setInnerWidth(window.innerWidth)

    }, [])
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, { passive: true })
        return () => window.removeEventListener('resize', handleResize)

    }, [handleResize])

    return (
        <SizeContext.Provider value={{ innerWidth }}>
            {children}
        </SizeContext.Provider>
    )

}

export default SizeObserver

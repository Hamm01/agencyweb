import React, { useRef, useContext } from 'react'


interface WrapperProps {
    numofPages: number
}

interface TileContextValue {
    numofPages: number
    currentPage: number
}

export const TileContext = React.createContext<TileContextValue>({ numofPages: 0, currentPage: 0 })


export const TileWrapper: React.FC<WrapperProps> = ({ children, numOfPages }) => {

    return <div className='bg-black relative text-white min-h-screen max-w-5xl'>
        TileWrapper
    </div>
}
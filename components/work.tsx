import React from "react";
import Link from "next/link";


export const WorkContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        {children}
    </div>

)

export const WorkBackground: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-black h-[30vh] lg:h-auto"></div>
        <div className="bg-white h-[70vh] lg:min-h-screen "></div>
    </div>
)

export const WorkLeft: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {

    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)

    return (
        <div className="flex flex-col items-center justify-center text-3xl h-[30vh] lg:h-auto " style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className="leading-10">{children}</div>
        </div>
    )
}

export const WorkRight: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {

    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
        <div className="flex flex-1 lg:items-center justify-center h-screen" style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0 ">
                {children}
            </div>
        </div>
    )

}

interface LinkProps {
    href: string,
    children: React.ReactNode
}
export const WorkLink: React.FC<LinkProps> = ({ href, children }) => {
    return <Link href={href} target="_blank" rel="noreferrer" className="underline underline-offset-8 decoration-1 cursor-pointer ">{children}</Link>

}





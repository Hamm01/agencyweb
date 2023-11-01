import React from 'react'
import Image from 'next/image'

const AgencyHead: React.FC = () => {
    return (
        <div className='min-h-screen w-[100vw] flex flex-col justify-center items-center'>
            <div className='p-12 font-bold'>

                <h1 className='mb-6 text-4xl xl:text-5xl'>Himanish Portfolio</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>Full Stack Developer </span><br />
                    <span>App Devlopement, </span>
                    <span>done right.</span>
                </h2>
            </div>
        </div>
    )

}

export default AgencyHead
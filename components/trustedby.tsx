import React from 'react'
import ClientLogos from './client-logos'
import Testiomonials from './testimonials'

const TrustedBy: React.FC = () => (

    <section className='bg-white min-h-screen flex flex-col justify-center  gap-16 md:gap-32 '>
        <div className="flex-1"></div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-xl mb-10 font-bold text-center'>
                <span className='whitespace-nowrap'>trusted by</span>{' '}
                <span className='whitespace-nowrap'>some of the apps you use daily</span>
            </h3>
            <ClientLogos />
        </div>
        <div className='flex flex-col justify-center items-center'>

            <div className="container mx-auto lg:mx-w-[70%] lg:px-10">
                <h3 className='text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]'>I believe in good communication and a fully transparent development process</h3>
            </div>
        </div>
        <Testiomonials />
        <div className="flex-1 bg-black "> </div>
    </section>)


export default TrustedBy
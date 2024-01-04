import React from 'react'

const Aboutus: React.FC = () => {

    return (<section className='aboutus flex flex-col bg-white py-20 text-4xl md:text-5xl'>
        <div className="container mx-auto px-11">
            <p className='text-4xl lg:text-4xl tracking-tight max-w-5xl leading-tight mx-auto '>
                <strong>I will help you ship better apps, faster.</strong>
                Created the best user experience in some of great apps worldwide.
                I craft reliable, fast, and user-friendly applications from end to end.
                Need a sleek UI, a powerful backend, or both? I can help you build it.
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
            <h2>Our Team</h2>
            <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                <div>member</div>
                <div>member</div>
                <div>member</div>
                <div>member</div>
                <div>member</div>
            </div>

        </div>
    </section>)
}
export default Aboutus
import React from 'react'
import Member from './member'
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
                <Member id={"christian"} name={"Christian"} socialId={'@christian0345'} link={'https://github.com/Marcs-sener'} />
                <Member id={"eric"} name={"Eric"} socialId={'@ericgonswales'} link={'https://github.com/Marcs-sener'} />
                <Member id={"christoph"} name={"Christoph"} socialId={'@christoph_stage'} link={'https://github.com/Marcs-sener'} />
                <Member id={"hanno"} name={"Hanno"} socialId={'@senlewesHanno'} link={'https://github.com/Marcs-sener'} />
                <Member id={"janic"} name={"Janic"} socialId={'@jeenystarkid'} link={'https://github.com/Marcs-sener'} />
                <Member id={"laurids"} name={"Laurids"} socialId={'@jstarlaurid'} link={'https://github.com/Marcs-sener'} />
                <Member id={"marc"} name={"Marc"} socialId={'@marcvidzee'} link={'https://github.com/Marcs-sener'} />
                <Member id={"stas"} name={"Stas"} socialId={'@stasmonicar'} link={'https://github.com/Marcs-sener'} />
                <Member id={"szymon"} name={"Szymon"} socialId={'@fleetszymon'} link={'https://github.com/Marcs-sener'} />
                <Member id={"taras"} name={"Taras"} socialId={'@taras2245'} link={'https://github.com/Marcs-sener'} />
                <Member id={"terry"} name={"Terry"} socialId={'@terryreacher'} link={'https://github.com/Marcs-sener'} />
                <Member id={"thomas"} name={"Thomas"} socialId={'@villeThomas'} link={'https://github.com/Marcs-sener'} />
                <Member id={"viktoria"} name={"Viktoria"} socialId={'@smileviktoria'} link={'https://github.com/Marcs-sener'} />

            </div>
        </div>
    </section>)
}
export default Aboutus
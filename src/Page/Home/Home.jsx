import React from 'react';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';

const Home = () => {
    return (
        <div className='container mx-auto mt-28 md:mt-28 lg:mt-30 '>
            {/* Introduction section  */}
            <section className='border mb-6'>
                <Introduction></Introduction>
            </section>
            {/* about me  */}
            <section className='border mb-6'>
                <About></About>
            </section>
            {/* skill section  */}
            <section className='border mb-6'>
                <Skills></Skills>
            </section>
            {/* contact section  */}
            <section className='border mb-6'>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;
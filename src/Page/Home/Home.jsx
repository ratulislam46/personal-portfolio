import React from 'react';
import Skills from '../Skills/Skills';
import About from '../About/About';

const Home = () => {
    return (
        <div className='container mx-auto mt-28 md:mt-28 lg:mt-30 '>
            {/* about me  */}
            <section className='border mb-6'>
                <About></About>
            </section>
            {/* skill section  */}
            <section className='border mb-6'>
                <Skills></Skills>
            </section>
        </div>
    );
};

export default Home;
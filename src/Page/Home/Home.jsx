import React from 'react';
import Skills from '../Skills/Skills';
import About from '../About/About';

const Home = () => {
    return (
        <div className='container mx-auto mt-20'>
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
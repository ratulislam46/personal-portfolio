import React from 'react';
import Skills from '../Skills/Skills';
import About from '../About/About';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            {/* about me  */}
            <section className='border'>
                <About></About>
            </section>
            {/* skill section  */}
            <section className='border'>
                <Skills></Skills>
            </section>
        </div>
    );
};

export default Home;
import React from 'react';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto border'>
            {/* skill section  */}
            <section>
                <Skills></Skills>
            </section>
        </div>
    );
};

export default Home;
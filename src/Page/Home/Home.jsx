import React from 'react';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';
import EducationQualification from '../Education/EducationQualification';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='container mx-auto mt-28 md:mt-28 lg:mt-30 '>
            {/* Introduction section  */}
            <section name="home" className='mb-6'>
                <Introduction></Introduction>
            </section>
            {/* about me  */}
            <section name="about" className=' mb-6'>
                <About></About>
            </section>
            {/* skill section  */}
            <section name="skills" className='mb-6'>
                <Skills></Skills>
            </section>
            {/* Education qualification section  */}
            <section name="education" className='mb-6'>
                <EducationQualification></EducationQualification>
            </section>
            {/* Projects section  */}
            <section name="projects" className='mb-6'>
                <Projects></Projects>
            </section>
            {/* contact section  */}
            <section name="contact" className='mb-6'>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;
import React from 'react';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';
import EducationQualification from '../Education/EducationQualification';
import Projects from '../Projects/Projects';
import Acheivement from '../Acheivement/Acheivement';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto mt-28 md:mt-28 lg:mt-30 '>
            <section name="home" className='mb-8 py-8'>
                <Introduction></Introduction>
            </section>

            <section name="about" className='mb-8 py-8'>
                <About></About>
            </section>

            <section name="skills" className='mb-8 py-8'>
                <Skills></Skills>
            </section>

            <section name="education" className='mb-8 py-8'>
                <EducationQualification></EducationQualification>
            </section>

            <section name="achievements" className='mb-8 py-8'>
                <Acheivement></Acheivement>
            </section>

            <section name="projects" className='mb-8 py-8'>
                <Projects></Projects>
            </section>
            
            <section name="services" className='mb-8 py-8'>
                <Services></Services>
            </section>

            <section name="contact" className='mb-8 py-8'>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;
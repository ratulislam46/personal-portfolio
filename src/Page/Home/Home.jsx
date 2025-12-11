import React, { Suspense } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';
import Loading from '../../Components/Loading/Loading';

const Projects = React.lazy(() => import('../Projects/Projects'));
const Skills = React.lazy(() => import('../Skills/Skills'));
const Services = React.lazy(() => import('../Services/Services'));
const Acheivement = React.lazy(() => import('../Acheivement/Acheivement'));


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
                <Suspense fallback={<Loading />}>
                    <Skills></Skills>
                </Suspense>
            </section>

            <section name="achievements" className='mb-8 py-8'>
                <Suspense fallback={<Loading />}>
                    <Acheivement></Acheivement>
                </Suspense>
            </section>

            <section name="projects" className='mb-8 py-8'>
                <Suspense fallback={<Loading />}>
                    <Projects></Projects>
                </Suspense>
            </section>

            <section name="services" className='mb-8 py-8'>
                <Suspense fallback={<Loading />}>
                    <Services />
                </Suspense>
            </section>

            <section name="contact" className='mb-8 py-8'>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;
import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';
import TypeWriter from '../../Components/Typewriter/TypeWriter';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div>
            {/* Header Section */}
            <motion.div
                className='text-center mb-12 md:mb-16'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4'>
                    My Technical Skills
                    {/* <TypeWriter text={'y Technical Skills & Expertise'}></TypeWriter> */}
                </h1>
                <div className='w-24 md:w-32 h-1 bg-primary mx-auto rounded-full'></div>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8 lg:space-y-0'>
                <div>
                    <Frontend></Frontend>
                </div>
                <div>
                    <Backend></Backend>
                </div>
                <div>
                    <Tools></Tools>
                </div>
            </div>
        </div>
    );
};

export default Skills;
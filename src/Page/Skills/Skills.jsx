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
                className='text-center mb-16 relative'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8 tracking-tight'>
                    My Technical Skills
                </h1>
                <div className="inline-block">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-relaxed">
                        Technologies & Tools I Work With
                    </p>
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
                </div>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8 lg:space-y-0 gap-5'>
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
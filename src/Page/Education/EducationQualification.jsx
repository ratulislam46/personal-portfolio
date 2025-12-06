import React from 'react';
import TypeWriter from '../../Components/Typewriter/TypeWriter';
import { motion } from 'framer-motion';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const EducationQualification = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='mx-2 md:mx-0'>
            <div>
                {/* Header Section */}
                <SectionHeader
                    title="Educational Qualification"
                    subtitle="My Academic Journey"
                />

                {/* Education Cards Grid */}
                <motion.div
                    className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {/* BBA Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -8,
                            transition: { duration: 0.3 }
                        }}
                        className='group relative overflow-hidden rounded-2xl md:rounded-3xl 
                        bg-base-100
                        shadow-xl hover:shadow-2xl hover:shadow-primary/20
                        border border-base-content/10 hover:border-primary/40
                        transition-all duration-500 ease-out'>

                        {/* Decorative Background Elements */}
                        <div className='absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full blur-3xl 
                            group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2'></div>
                        <div className='absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-2xl 
                            group-hover:bg-primary/20 transition-all duration-500 translate-y-1/2 -translate-x-1/2'></div>

                        {/* Card Content */}
                        <div className='relative z-10 p-6 md:p-8 lg:p-10'>
                            {/* Icon Badge */}
                            <div className='inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 
                                bg-primary rounded-2xl md:rounded-3xl
                                shadow-lg shadow-primary/30 mb-6 md:mb-8
                                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500'>
                                <svg className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' />
                                </svg>
                            </div>

                            {/* Title */}
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 
                                text-primary
                                group-hover:opacity-80 transition-all duration-300'>
                                Bachelor of Business Administration
                            </h1>

                            <p className='text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-base-content/80'>
                                (BBA)
                            </p>

                            {/* Divider */}
                            <div className='w-16 md:w-20 h-1 bg-primary rounded-full mb-4 md:mb-5 
                                group-hover:w-full transition-all duration-500'></div>

                            {/* University Info */}
                            <div className='space-y-2 md:space-y-3 mb-4 md:mb-6'>
                                <p className='text-base md:text-lg lg:text-xl font-semibold text-base-content
                                    flex items-center gap-2'>
                                    <svg className='w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                                    </svg>
                                    <span>National University, Bangladesh</span>
                                </p>
                            </div>

                            {/* Year & Department Badge */}
                            <div className='flex flex-wrap gap-2 md:gap-3'>
                                <span className='inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 
                                    bg-primary/10 border border-primary/30 rounded-lg md:rounded-xl
                                    text-sm md:text-base font-medium text-base-content'>
                                    📅 (2022-23) 3<sup>rd</sup> Year
                                </span>
                                <span className='inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 
                                    bg-primary/10 border border-primary/30 rounded-lg md:rounded-xl
                                    text-sm md:text-base font-medium text-base-content'>
                                    📊 Marketing
                                </span>
                            </div>
                        </div>

                        {/* Hover Shine Effect */}
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
                        </div>
                    </motion.div>

                    {/* HSC Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -8,
                            transition: { duration: 0.3 }
                        }}
                        className='group relative overflow-hidden rounded-2xl md:rounded-3xl 
                        bg-base-100
                        shadow-xl hover:shadow-2xl hover:shadow-primary/20
                        border border-base-content/10 hover:border-primary/40
                        transition-all duration-500 ease-out'>

                        {/* Decorative Background Elements */}
                        <div className='absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full blur-3xl 
                            group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2'></div>
                        <div className='absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-2xl 
                            group-hover:bg-primary/20 transition-all duration-500 translate-y-1/2 -translate-x-1/2'></div>

                        {/* Card Content */}
                        <div className='relative z-10 p-6 md:p-8 lg:p-10'>
                            {/* Icon Badge */}
                            <div className='inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 
                                bg-primary rounded-2xl md:rounded-3xl
                                shadow-lg shadow-primary/30 mb-6 md:mb-8
                                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500'>
                                <svg className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z' />
                                </svg>
                            </div>

                            {/* Title */}
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 
                                text-primary
                                group-hover:opacity-80 transition-all duration-300'>
                                Higher Secondary Certificate
                            </h1>

                            <p className='text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-base-content/80'>
                                (HSC)
                            </p>

                            {/* Divider */}
                            <div className='w-16 md:w-20 h-1 bg-primary rounded-full mb-4 md:mb-5 
                                group-hover:w-full transition-all duration-500'></div>

                            {/* College Info */}
                            <div className='space-y-2 md:space-y-3 mb-4 md:mb-6'>
                                <p className='text-base md:text-lg lg:text-xl font-semibold text-base-content
                                    flex items-center gap-2'>
                                    <svg className='w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                                    </svg>
                                    <span>Govt. Barishal College, Barishal</span>
                                </p>
                            </div>

                            {/* Year & Department Badge */}
                            <div className='flex flex-wrap gap-2 md:gap-3'>
                                <span className='inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 
                                    bg-primary/10 border border-primary/30 rounded-lg md:rounded-xl
                                    text-sm md:text-base font-medium text-base-content'>
                                    📅 (2020-2022)
                                </span>
                                <span className='inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 
                                    bg-primary/10 border border-primary/30 rounded-lg md:rounded-xl
                                    text-sm md:text-base font-medium text-base-content'>
                                    🔬 Science
                                </span>
                            </div>
                        </div>

                        {/* Hover Shine Effect */}
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Timeline Connector for Desktop */}
                <div className='hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-primary opacity-30'></div>
            </div>
        </div>
    );
};

export default EducationQualification;

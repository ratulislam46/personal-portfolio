import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaLanguage } from 'react-icons/fa';

const Acheivement = () => {
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

    const achievements = [
        {
            id: 1,
            title: "Web Development Course",
            description: "Completed Web Development Course with Programming Hero",
            icon: FaCode
        },
        {
            id: 2,
            title: "English Language Course",
            description: "Completed English Language Course under BMET from Technical Training Center",
            icon: FaLanguage
        }
    ];

    return (
        <div className='mx-2 md:mx-0'>
            {/* Header Section */}
            <motion.div 
                className='text-center mb-16 relative'
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className='text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8 tracking-tight'>
                    My Achievements
                </h1>
                <div className="inline-block">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-relaxed">
                        Certifications & Accomplishments
                    </p>
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
                </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {achievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                        <motion.div
                            key={achievement.id}
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
                            transition-all duration-500 ease-out'
                        >
                            {/* Decorative Background Elements */}
                            <div className='absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full blur-3xl 
                                group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2'></div>
                            <div className='absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-secondary/10 rounded-full blur-2xl 
                                group-hover:bg-secondary/20 transition-all duration-500 translate-y-1/2 -translate-x-1/2'></div>
                            
                            {/* Card Content */}
                            <div className='relative z-10 p-6 md:p-8 lg:p-10'>
                                {/* Icon Badge */}
                                <div className='inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 
                                    bg-primary rounded-2xl md:rounded-3xl
                                    shadow-lg shadow-primary/30 mb-6 md:mb-8
                                    group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500'>
                                    <Icon className='text-3xl md:text-4xl lg:text-5xl text-base-100' />
                                </div>

                                {/* Trophy Icon */}
                                <div className='flex items-center gap-2 mb-4'>
                                    <FaTrophy className='text-primary text-xl md:text-2xl' />
                                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-primary'>
                                        {achievement.title}
                                    </h2>
                                </div>
                                
                                {/* Divider */}
                                <div className='w-16 md:w-20 h-1 bg-primary rounded-full mb-4 md:mb-6 
                                    group-hover:w-full transition-all duration-500'></div>
                                
                                {/* Description */}
                                <p className='text-base md:text-lg lg:text-xl text-base-content leading-relaxed'>
                                    {achievement.description}
                                </p>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Acheivement;
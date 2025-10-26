import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import { motion } from 'framer-motion';

const Tools = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = fetch('/tools.json')
            .then(res => res.json())
            .then(data => {
                setSkills(data)
                setLoading(false)
            })
    }, [setSkills, setLoading])
    // console.log(skills);

    if (loading) return <Loading></Loading>

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="px-4 md:px-6 lg:px-8 py-6 md:py-8">
            {/* Section Header */}
            <motion.div
                className="text-center mb-10 md:mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
                    Tools
                </h2>
                <div className="w-16 md:w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                className="grid gap-4 md:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -8,
                            transition: { duration: 0.3 } 
                        }}
                        className="group relative overflow-hidden rounded-xl 
                            py-5 px-3 flex flex-col items-center text-center
                            bg-base-100 shadow-lg hover:shadow-xl hover:shadow-primary/20
                            border border-base-content/10 hover:border-primary/40
                            transition-all duration-300"
                    >
                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-2xl 
                            group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                        
                        {/* Icon Container */}
                        <div className="relative z-10 mb-3 p-2.5 bg-primary/10 rounded-xl 
                            group-hover:bg-primary/20 transition-all duration-300
                            group-hover:scale-110 group-hover:rotate-6">
                            <img
                                src={skill.image}
                                alt={skill.title}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        
                        {/* Title */}
                        <h3 className="relative z-10 text-sm font-semibold text-base-content 
                            group-hover:text-primary transition-colors duration-300">
                            {skill.title}
                        </h3>

                        {/* Hover Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Tools;
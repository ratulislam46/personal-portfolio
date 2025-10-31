import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SkillCard from '../../Components/Animation/Cards/SkillCard';
import SkillSectionHeader from '../../Components/SectionHeader/SkillSectionHeader';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Skills = () => {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/skill.json')
            .then(res => res.json())
            .then(data => {
                setSkills(data)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loading></Loading>

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className='mx-2 md:mx-0'>
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

            {/* All Skills Section */}
            <section className='mb-16'>
                <motion.div
                    className="grid gap-3 md:gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={itemVariants}
                        >
                            <SkillCard
                                icon={
                                    <img
                                        src={skill.image}
                                        alt={skill.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                }
                                title={skill.title}
                                className="py-4 px-2"
                                iconContainerClassName="p-2 mb-2"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Skills;
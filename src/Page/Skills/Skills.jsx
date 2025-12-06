import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SkillCard from '../../Components/Animation/Cards/SkillCard';
import { motion } from 'framer-motion';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

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
            <SectionHeader
                title="My Technical Skills"
                subtitle="Technologies & Tools I Work With"
            />

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
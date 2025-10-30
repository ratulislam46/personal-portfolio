import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SkillCard from '../../Components/Animation/Cards/SkillCard';
import SkillSectionHeader from '../../Components/SectionHeader/SkillSectionHeader';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Frontend = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/frontend.json')
            .then(res => res.json())
            .then(data => {
                setSkills(data)
                setLoading(false)
            })
    }, [setSkills, setLoading])

    if (loading) return <Loading></Loading>

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section>
            {/* Section Header */}
            <SkillSectionHeader title="Frontend" />

            {/* Skills Grid */}
            <motion.div
                className="grid gap-4 md:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        icon={
                            <img
                                src={skill.image}
                                alt={skill.title}
                                className="w-12 h-12 object-contain"
                            />
                        }
                        title={skill.title}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Frontend;
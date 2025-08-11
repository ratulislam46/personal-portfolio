import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Frontend = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const data = fetch('/public/frontend.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [setSkills])
    console.log(skills);

    return (
        <div>
            <section className="py-10 px-4 md:px-8">
                {/* Section Title */}
                <div className="text-center text-2xl font-bold text-base-content mb-10">
                    <p className="mt-2">Explore My Frontend Skillset</p>
                    <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
                </div>

                {/* Grid Cards */}
                <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            className="shadow-lg hover:shadow-xl rounded-2xl py-6 px-2 flex flex-col items-center text-center transition duration-300 bg-base-100 border border-gray-200"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <img
                                src={skill.image}
                                alt={skill.title}
                                className="w-16 h-16 object-contain mb-4"
                            />
                            <h3 className="text-xl text-base-content font-semibold">{skill.title}</h3>
                            {/* <p className="text-sm mt-2 px-2">{skill.description}</p> */}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Frontend;
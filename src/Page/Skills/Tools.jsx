import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';

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

    return (
        <div>
            <section className="px-4 md:px-8">
                {/* Section Title */}
                <div
                    data-aos="zoom-in-up"
                    className="text-center text-2xl font-bold text-base-content mb-10">
                    <p className="mt-2">Tools</p>
                    <div className="w-8 h-1 bg-primary mx-auto mt-3 rounded-full" />
                </div>

                {/* Grid Cards */}
                <div data-aos="zoom-in-up" className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className="shadow-lg hover:shadow-xl rounded-2xl py-6 px-2 flex flex-col items-center text-center transition duration-300 bg-base-100 border border-base-content/5"
                            whilehover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <img
                                src={skill.image}
                                alt={skill.title}
                                className="w-16 h-16 object-contain mb-4"
                            />
                            <h3 className="text-base-content font-semibold">{skill.title}</h3>
                            {/* <p className="text-sm mt-2 px-2">{skill.description}</p> */}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Tools;
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const About = () => {

    const [text] = useTypewriter({
        words: [
            "Frontend Developer",
            "Full Stack Developer",
            "MERN Stack Developer"
        ],
        loop: 0,
        delaySpeed: 2000,
    })

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="flex items-center px-4">
            <motion.div 
                className="w-full flex justify-between flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Profile Image */}
                <motion.div 
                    className="relative"
                    variants={imageVariants}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden flex-shrink-0 shadow-2xl border-4 border-primary hover:border-secondary transition-all duration-300 hover:scale-105">
                        <img
                            src='https://i.postimg.cc/0jZGJCv0/Gemini-Generated-Image-o1vfweo1vfweo1vf-1.png'
                            alt="Md Ratul Howlader"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                    className="text-center md:text-left flex-1 space-y-4 md:space-y-6"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-base-content"
                        variants={itemVariants}
                    >
                        Hello, I'm
                    </motion.h2>
                    
                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary leading-tight"
                        variants={itemVariants}
                    >
                        Md Ratul Howlader
                    </motion.h2>
                    
                    <motion.h3 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-base-content min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem]"
                        variants={itemVariants}
                    >
                        <span>{text}</span>
                        <span className="text-primary"> <Cursor /> </span>
                    </motion.h3>
                    
                    <motion.p 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content max-w-2xl mx-auto md:mx-0 leading-relaxed"
                        variants={itemVariants}
                    >
                        I build responsive and scalable web applications using clean code and modern technologies..
                    </motion.p>

                    {/* Social link  */}
                    <motion.div 
                        className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-4"
                        variants={itemVariants}
                    >
                        <motion.a
                            href='https://www.linkedin.com/in/ratulislambd/'
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-base-100 border-2 border-base-content/10 
                                hover:border-info/40 rounded-xl shadow-md hover:shadow-info/20
                                flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CiLinkedin className="text-3xl sm:text-4xl md:text-5xl text-base-content group-hover:text-info transition-colors z-10" />
                            <div className="absolute inset-0 bg-info/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                        </motion.a>
                        
                        <motion.a
                            href='https://github.com/ratulislam46'
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-base-100 border-2 border-base-content/10 
                                hover:border-info/40 rounded-xl shadow-md hover:shadow-info/20
                                flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub className="text-3xl sm:text-4xl md:text-5xl text-base-content group-hover:text-info transition-colors z-10" />
                            <div className="absolute inset-0 bg-info/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                        </motion.a>
                    </motion.div>

                    {/* Download CV button  */}
                    <motion.div
                        variants={itemVariants}
                    >
                        <motion.a
                            href="/resume.pdf"
                            className="inline-block bg-primary hover:bg-primary/90 text-base-100 font-bold py-3 px-8 sm:py-4 sm:px-10 md:py-4 md:px-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base md:text-lg"
                            download="Ratul_Resume.pdf"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;

import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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

    return (
        <section>
            <div className="px-4 flex justify-between flex-col md:flex-row-reverse items-center py-12">
                {/* Profile Image */}
                <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden mb-8 md:mb-0 flex-shrink-0 shadow-lg border-4 border-primary">
                    <img
                        src='https://i.postimg.cc/g2sMLpBk/IMG-8213.jpg'
                        alt="ArFan RaTul"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center text-base-content md:text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Hello,  I'm</h2>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">Md Ratul Howlader</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-base-content">
                        <span>{text}</span>
                        <span> <Cursor /> </span>
                    </h3>
                    <p className="text-xl">
                        I make responsive and valuable website.
                    </p>

                    {/* Social link  */}
                    <div className="mt-4 mb-7">
                        <Link to='https://www.linkedin.com/in/ratulislambd/'
                            target="_blank" rel="noopener noreferrer" className="mr-4"
                        >
                            <CiLinkedin size={40} className="border p-2 rounded-md btn btn-outline btn-info btn-lg"></CiLinkedin>
                        </Link>
                        <Link to='https://github.com/ratulislam46'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <FaGithub size={40} className="border p-2 rounded-md btn btn-outline btn-info btn-lg"></FaGithub>
                        </Link>
                    </div>

                    {/* Download Cv button  */}
                    <div>
                        <a
                            href="/resume.pdf"
                            className="bg-primary text-base-content font-semibold py-2 px-6 rounded transition cursor-pointer"
                            download="Ratul_Resume.pdf"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

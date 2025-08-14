import React from "react";
import profileImg from "../../../public/assets/IMG-20220721-WA0001-01-01-removebg-preview (2).png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const About = () => {

    return (
        <section>
            <div className="px-4 flex justify-between flex-col md:flex-row-reverse items-center py-12">
                {/* Profile Image */}
                <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden mb-8 md:mb-0 flex-shrink-0 shadow-lg border-4 border-primary">
                    <img
                        src={profileImg}
                        alt="ArFan RaTul"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center text-base-content md:text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Hello,  I'm</h2>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">Md Ratul Howlader</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-base-content">
                       <Typewriter
                            words={["Full Stack Web Developer"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        ></Typewriter>
                    </h3>
                    <p className="text-xl">
                        I make responsive and valuable website. I'm a good team member who enjoys working and collaborating with others.
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
                            href="https://drive.google.com/uc?export=download&id=1vES2TrjA2_oWCRNEhJTAPA3YCb2dHkon"
                            className="bg-primary text-base-content font-semibold py-2 px-6 rounded transition cursor-pointer"
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

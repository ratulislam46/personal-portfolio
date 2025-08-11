import React from "react";
import profileImg from "../../../public/assets/IMG-20220721-WA0001-01-01-removebg-preview (2).png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import toast from "react-hot-toast";

const About = () => {

    const handleDwnldBtn = () => {
        toast.success('CV Cooming Soon')
    }
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Md Ratul Howlader</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-base-content">Full Stack Web Developer</h3>
                    <p className="text-xl">
                       I make responsive and valuable website. Alway's I will try to how can i improve myself.
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
                    <a
                        onClick={handleDwnldBtn}
                        // href="/ArFan_RaTul_CV.pdf"
                        download
                        className="bg-primary text-base-content font-semibold py-2 px-6 rounded transition cursor-pointer"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;

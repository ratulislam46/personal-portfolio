import React from "react";
import profileImg from "../../../public/assets/IMG-20220721-WA0001-01-01-removebg-preview (2).png";
import toast from "react-hot-toast";

const About = () => {

  const handleDwnldBtn = () => {
    toast.success('CV Cooming Soon')
  }
  return (
    <section>
      <div className="px-4 flex flex-col justify-center md:flex-row-reverse items-center py-12">
        {/* Profile Image */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden mb-8 md:mb-0 flex-shrink-0 shadow-lg border-4 border-primary">
          <img
            src={profileImg}
            alt="ArFan RaTul"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-base-100 md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-base-100">Passionate Developer from Bangladesh</h3>
          <p className="mb-4">
            I’m <span className="font-semibold">Ratul Islam</span>, a dedicated and
            self-motivated web developer with a strong passion for building
            modern, responsive, and user-friendly websites and applications.
          </p>
          <p className="mb-4">
            I’ve completed a full web development course and gained hands-on
            experience with frontend tools like <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>Tailwind CSS</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>React</strong>. I’ve also
            worked with backend technologies such as <strong>Node.js</strong>,{" "}
            <strong>Express.js</strong>, and <strong>MongoDB</strong>.
          </p>
          <p className="mb-6">
            I enjoy solving real-world problems by developing useful applications.
            Every day, I challenge myself to improve by learning new tools,
            exploring modern design, and building meaningful projects.
          </p>

          <a
            onClick={handleDwnldBtn}
            // href="/ArFan_RaTul_CV.pdf"
            download
            className="bg-primary text-base-100 font-semibold py-2 px-6 rounded transition cursor-pointer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

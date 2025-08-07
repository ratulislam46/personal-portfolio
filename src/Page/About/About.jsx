import React from "react";
import profileImg from "../../../public/assets/IMG-20220721-WA0001-01-01-removebg-preview (2).png";

const About = () => {
  return (
    <section>
      <div className="px-4 flex flex-col justify-center md:flex-row-reverse items-center py-12">
        {/* Profile Image */}
        <div className="rounded-full overflow-hidden mb-8 md:mb-0">
          <img
            src={profileImg}
            alt="ArFan RaTul"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="xs:text-xl md:text-2xl lg:text-3xl font-bold mb-4">About Me</h2>
          <h3 className="xs:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-400">Passionate Developer from Bangladesh</h3>
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
            href="/ArFan_RaTul_CV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

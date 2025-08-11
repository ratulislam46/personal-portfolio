import React from "react";

const About = () => {

  return (
    <section>
      <div className="px-4 flex flex-col justify-center md:flex-row-reverse items-center py-12">
        {/* Text Content */}
        <div className="text-center text-base-content md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-base-content">Passionate Developer from Bangladesh</h3>
          <p className="mb-4">
            I’m <span className="font-semibold">Md Ratul Howlader</span>, a dedicated and
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
        </div>
      </div>
    </section>
  );
};

export default About;

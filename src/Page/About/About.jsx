import React from "react";

const About = () => {

  return (
    <section>
      <div className="px-4 flex flex-col justify-center md:flex-row-reverse items-center ">
        {/* Text Content */}
        <div className="text-center text-base-content md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">Passionate Developer from Bangladesh  with expertise in React.js and Node.js</h3>

          {/* <p data-aos="zoom-in-up" className="mb-4 text-xl text-gray-400">
           I’m <span className="font-bold text-base-content">Md Ratul Howlader</span>, a passionate web Developer.
          </p> */}
          
          <p data-aos="zoom-in-up" className="mb-4 text-xl text-gray-400">
            My journey as a web developer began during my college years, when I was in the middle of my studies. During that time, I started learning slowly, focusing on the basics, and teaching myself.
            After completing my intermediate exams, I followed a roadmap to become an expert full-stack developer. Despite facing many major challenges along the way, today I am truly delighted to have successfully learned both front-end and back-end development.
          </p>
          <p data-aos="zoom-in-up" className="mb-4 text-xl text-gray-400">
            Now, I have completed a full web development course and gained practical experience with frontend tools. I have also worked with backend technologies.Already, I am developing some projects using frontend and backend technologies.
          </p>
          <p data-aos="zoom-in-up" className="mb-4 text-xl text-gray-400">
            I enjoy solving real-world problems by building useful applications.
            Every day, I strive to improve by reviewing new documentation, learning new tools, exploring modern design, and creating meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

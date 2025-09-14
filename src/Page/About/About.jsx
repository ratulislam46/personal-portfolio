import React from "react";

const About = () => {

  return (
    <section>
      <div className="px-4 flex flex-col justify-center md:flex-row-reverse items-center ">
        {/* Text Content */}
        <div className="text-center text-base-content md:text-left">
          <h2 className="text-green-400 text-3xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-2xl md:text-3xl font-bold mb-4 text-base-content">Passionate Developer from Bangladesh  with expertise in React.js and Node.js</p>

          <p className="mb-4 text-xl text-gray-400">
            I’m <span className="font-semibold text-base-content">Md Ratul Howlader</span>. Currently, I am studying in my 2nd year of Honours. Since intermediate, my dream was to become a skillful web developer. My main interest has always been web development.
          </p>

          <p className="mb-4 text-xl text-gray-400">
            My journey as a web developer began during my college years, when I was in the middle of my studies. During that time, I started learning, focusing on the basics.
            After completing my intermediate exams, I followed a roadmap to become an expert full-stack developer. Despite facing many major challenges along the way, today I am truly delighted to have successfully learned both front-end and back-end development.
          </p>
          <p className="mb-4 text-xl text-gray-400">
            Now, I have completed a full web development bootcamp and gained practical experience with frontend tools. I have also worked with backend technologies.Already, I am developing some projects using frontend and backend technologies.
          </p>
          <p className="mb-4 text-xl text-gray-400">
            I try to learn quickly. When I face a challenge, I research and try to find a solution. I keep trying until I get the result. With this mindset and my skills, I want to contribute to your company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

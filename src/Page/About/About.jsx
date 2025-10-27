import React from "react";

const About = () => {

  return (
    <section>
      <div>
        {/* Header Section with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8 tracking-tight">
            About Me
          </h2>
          <div className="inline-block">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-relaxed">
              Passionate Developer from Bangladesh with expertise in React.js and Node.js
            </p>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-base-200 rounded-3xl shadow-2xl p-6 md:p-10 lg:p-14 border border-base-300 hover:shadow-primary/10 transition-all duration-300">
          <div className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none">
            <div className="space-y-6 md:space-y-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
                I'm <span className="font-semibold text-base-content bg-primary/10 px-2 py-1 rounded">Md Ratul Howlader</span>. Currently, I am studying in my 2nd year of Honours. Since intermediate, my dream was to become a skillful web developer. My main interest has always been web development.
              </p>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
                My journey as a web developer began during my college years, when I was in the middle of my studies. During that time, I started learning, focusing on the basics.
                After completing my intermediate exams, I followed a roadmap to become an expert full-stack developer. Despite facing many major challenges along the way, today I am truly delighted to have successfully learned both front-end and back-end development.
              </p>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
                Now, I have completed a full web development bootcamp and gained practical experience with frontend tools. I have also worked with backend technologies.Already, I am developing some projects using frontend and backend technologies.
              </p>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
                I try to learn quickly. When I face a challenge, I research and try to find a solution. I keep trying until I get the result. With this mindset and my skills, I want to contribute to your company.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
       
      </div>
    </section>
  );
};

export default About;
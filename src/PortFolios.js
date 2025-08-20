import React from "react";

const projects = [
  {
    title: "School App",
    image: "/portfolioimage/school-image.jpg",
    description: "React-based platform with student login and dashboard.",
    tech: ["React", "Firebase", "Tailwind"],
    live: "https://saheed-myschool-app.vercel.app",
    github: "https://github.com/saheedmh/shool-app",
  },
  {
    title: "Portfolio Website",
    image: "/portfolioimage/portfolio.jpg",
    description: "My personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    live: "https://saheed-personal-portfolio.vercel.app",
    github: "https://github.com/...", // replace
  },
  {
    title: "Calculator App",
    image: "/portfolioimage/calc.jpg",
    description: "A responsive calculator app with keyboard support.",
    tech: ["React", "CSS"],
    live: "https://saheed-calculator-app.vercel.app",
    github: "https://github.com/...", // replace
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Projects I've built using React, JavaScript, and Tailwind CSS.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-blue-400/50 transition transform hover:-translate-y-2 duration-300 p-5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4  w-full h-70 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-white ">
                <a href={project.live} className="bg-yellow-500 p-2" target="_blank" rel="noreferrer">
                  🔗 Live
                </a>
                <a href={project.github} className="bg-yellow-500 p-2 hover:text-blue-500 border-rounded-10" target="_blank" rel="noreferrer">
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

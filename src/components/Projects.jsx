import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-2xl sm:text-4xl"
      >
        PROJECTS
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center lg:gap-10"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 mb-2"
            >
              <h3 className="mb-2 font-semibold text-xl sm:text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-xs sm:text-base text-stone-400">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-2 rounded bg-stone-900 px-2 py-1 text-xs font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-4 flex flex-wrap gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl border border-black bg-white px-3 py-2 text-xs text-black transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl border border-black bg-white px-3 py-2 text-xs text-black transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer"
                >
                  GitHub Repo
                </a>
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

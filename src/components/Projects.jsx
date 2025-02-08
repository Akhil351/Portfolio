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
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                className="w-full lg:w-1/4"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
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
                className="w-full max-w-xl lg:w-3/4"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
              >
                <h3 className="mb-2 font-semibold text-2xl">
                  <a
                    href={project.link}
                    className="text-blue-500"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mb-4 text-stone-400">{project.description}</p>
                <div>
                  {project.technologies.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

const Card = ({ project }: any) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="flex flex-col max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href={project.ghLink} target="_blank">
        <Image
          className="w-full"
          src={project.image}
          alt={project.name}
          width={400}
          height={400}
        />
      </a>
      <div className="flex flex-col p-5 h-full">
        <a href={project.ghLink} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-500 dark:text-white">
            {project.name}
          </h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {project.description}
        </p>
        <div className="flex flex-wrap space-x-4 mb-2">
          {project.tools.sort((a: any, b: any) => a.name.localeCompare(b.name)).map((tool: any, idx: number) => (
            <Tooltip key={idx} content={tool.name} className="bg-gray-500 text-white p-2 rounded-lg">
              <Image className="rounded-lg mt-4" src={tool.link} alt={tool.name} width={28} height={28} />
            </Tooltip>
          ))}
        </div>
        <a
          href={project.ghLink}
          target="_blank"
          className="inline-flex items-center mt-auto place-self-start py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Source code
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;

import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { ThemeContext } from "@/contexts/themeProvider";
import { experienceData } from "@/constants/constants";

const Experiences = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="experiences"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Experiences
        </h2>
        {experienceData.map((el) => (
          <motion.div
            key={el.name}
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={
              theme.state.darkMode
                ? "md:w-auto p-4 bg-white rounded-lg flex md:flex-row sm:flex-col mt-8"
                : "md:w-auto p-4 bg-gray-100 rounded-lg flex md:flex-row sm:flex-col mt-8"
            }
          >
            <div className="flex justify-center items-center flex-col md:w-1/2">
              <a href={el.link} target="_blank">
                <Image
                  className="grayscale hover:grayscale-0 lg:grayscale md:grayscale-0 sm:grayscale-0"
                  src={el.image}
                  alt={el.name}
                  width={300}
                  height={168}
                />
              </a>
              <strong className="mt-4">
                {el.startDate} - {el.endDate || "Present"}
              </strong>
            </div>
            <div className="flex flex-col md:w-1/2">
              <h4 className="text-xl font-bold mt-4">{el.name}</h4>
              <strong className="text-md">{el.position}</strong>
              {el.description.map((desc) => (
                <p key={desc} className="text-sm mt-2 text-justify">
                  {desc}
                </p>
              ))}
              <div className="flex flex-wrap space-x-4">
                {el.tools
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tool, idx) => (
                    <Tooltip
                      key={idx}
                      content={tool.name}
                      className="bg-gray-500 text-white p-2 rounded-lg"
                    >
                      <Image
                        className="rounded-lg mt-4"
                        src={tool.link}
                        alt={tool.name}
                        width={28}
                        height={28}
                      />
                    </Tooltip>
                  ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

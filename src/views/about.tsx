import React, { useContext } from "react";
import { techStack } from "../constants/constants";
import { ThemeContext } from "../contexts/themeProvider";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            "text-5xl font-bold px-4 md:px-0 text-center " +
            (darkMode || "text-white")
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <div className="flex flex-wrap md:flex-row sm:flex-col md:space-x-8 sm:space-x-0">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={"Reinaldo Taslim"}
                  src={"/me.jpg"}
                  className="rounded-xl mt-4 hover:grayscale-0 lg:grayscale md:grayscale-0 sm:grayscale-0 sm:self-center"
                  width={300}
                  height={150}
                />
              </a>
              <div className="mt-4 flex-1 w-full">
                <p
                  className={
                    "text-xl text-justify " +
                    (darkMode ? "text-gray-500" : "text-white")
                  }
                >
                  Driven by a passion for good design, innovative technology,
                  and user-centric solutions, I translate my skills as a
                  self-taught web and mobile app developer into high-performance
                  software applications. From ideation to release, I take
                  ownership of projects, weaving together efficient code,
                  beautiful design, and cutting-edge solutions. Currently,
                  I&apos;m diving deeper into the world of backend development,
                  building the engines that power exceptional user experiences.
                </p>
                <p
                  className={
                    "text-xl text-justify mt-4 " +
                    (darkMode ? "text-gray-500" : "text-white")
                  }
                >
                  From <strong>guitar</strong> riffs to <strong>chess</strong>{" "}
                  checkmates, I thrive on a dynamic blend of melody and
                  strategy. I wield both <strong>ukulele</strong> and logic,
                  trading <strong>badminton</strong> smashes for{" "}
                  <strong>boxing</strong> jabs, all while keeping my heart
                  humming to the rhythm of passion. One beat at a time, I find
                  my groove.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                "mt-4 text-xl text-justify " +
                (darkMode ? "text-gray-500" : "text-white")
              }
            >
              Leveraging cutting-edge frameworks and dependable open-source libraries,
              I craft user-centric, high-performance applications across devices.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-center ">
            {techStack
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((el, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                  className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                >
                  <Image
                    alt={el.name}
                    src={el.link}
                    className="w-12"
                    width={50}
                    height={50}
                  />
                  <h4 className="text-md ml-4">{el.name}</h4>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

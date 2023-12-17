import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { contactLinks } from "../constants/constants";
import { ThemeContext } from "../contexts/themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

const Main = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? {
                backgroundImage: `url('/cloudBg.png')`,
                backgroundSize: "cover",
              }
            : {
                backgroundImage: `url('/cloudDark.png')`,
                backgroundSize: "cover",
              }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : "block text-white"}
              >
                Hi, I am Reinaldo Taslim
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <TypeAnimation
                  sequence={[
                    "Front End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Mobile Developer",
                    1000,
                  ]}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Front-End / Full-Stack Developer. I am currently working at
              WebLITE as a Software Engineer
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <Image alt={el.name} src={el.url} width={50} height={50} />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
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
            src="/webdev.svg"
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Main;

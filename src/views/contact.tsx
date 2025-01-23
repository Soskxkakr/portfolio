import React, { EventHandler, useContext, useState } from "react";
import { contactLinks } from "../constants/constants";
import { ThemeContext } from "../contexts/themeProvider";
import Image from "next/image";

const Contact = () => {
  const [emailTemplate, setEmailTemplate] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleEmailTemplate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailTemplate((template) => ({ ...template, [name]: value }));
  };

  const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const body = emailTemplate.message.replaceAll("\n", "%0D%0A");
    const defaultFooter = emailTemplate.name
      ? "%0D%0A%0D%0ASincere%0D%0A" + emailTemplate.name
      : "";
    window.location.href =
      "mailto:aldo.taslim@gmail.com?subject=" +
      emailTemplate.subject +
      "&body=" +
      body +
      defaultFooter;
  };

  return (
    <div
      id="contact"
      className={darkMode ? "bg-gray-100 pt-36" : "bg-black text-white pt-36"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p
            className={
              "mt-4 text-xl " + (darkMode ? "text-gray-500" : "text-white")
            }
          >
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I&apos;d love to hear from
            you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-2">
          <div className="w-full md:pr-8">
            <form>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={emailTemplate.name}
                  onChange={(e) => handleEmailTemplate(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={emailTemplate.subject}
                  onChange={(e) => handleEmailTemplate(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your subject"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={emailTemplate.message}
                  onChange={(e) => handleEmailTemplate(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="mailto:aldo.taslim@gmail.com">
                    Send me email directly
                  </a>
                </div>
                <button
                  className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
                  onClick={(e) => handleSubmitForm(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            <h1 className="text-3xl font-bold">Phone</h1>
            <a className="mb-12 mt-4 font-semibold text-blue-700 block uppercase">
              +60 17-242 0407
            </a>
            <h1 className="text-3xl font-bold">Email</h1>
            <a className="mb-12 mt-4 font-semibold text-blue-700 block uppercase">
              aldo.taslim@gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase">
              Petaling Jaya, Selangor
              <br />
              Kuala Lumpur, Malaysia
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <Image alt="" src={el.url} width={50} height={50} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Reinaldo Taslim
      </div>
    </div>
  );
};

export default Contact;

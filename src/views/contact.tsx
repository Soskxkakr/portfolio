"use client";

import { useState } from "react";
import { contactLinks } from "../constants/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  const [emailTemplate, setEmailTemplate] = useState({
    name: "",
    subject: "",
    message: "",
  });

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
      encodeURIComponent(emailTemplate.subject) +
      "&body=" +
      body +
      defaultFooter;
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-inner transition focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20";

  return (
    <section id="contact" className="relative border-t border-white/[0.06]">
      <div className="mesh-bg border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-400/90">
              Hello
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Contact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              Want to collaborate or say hi? Drop a message — I&apos;d love to
              hear from you.
            </p>
          </motion.div>

          <div className="mt-16 flex flex-col gap-14 lg:flex-row lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel flex-1 p-6 md:p-8"
            >
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={emailTemplate.name}
                    onChange={handleEmailTemplate}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={emailTemplate.subject}
                    onChange={handleEmailTemplate}
                    className={inputClass}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={emailTemplate.message}
                    onChange={handleEmailTemplate}
                    rows={5}
                    className={inputClass}
                    placeholder="Write your message..."
                    required
                  />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="mailto:aldo.taslim@gmail.com"
                    className="text-sm text-cyan-400 underline-offset-4 hover:underline"
                  >
                    Or email me directly
                  </a>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3 font-semibold text-zinc-950 shadow-glow"
                    onClick={handleSubmitForm}
                  >
                    Open in email client
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex w-full flex-col gap-8 lg:max-w-sm"
            >
              <div className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white">Details</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-zinc-500">Phone</dt>
                    <dd className="mt-1 font-medium text-cyan-300/90">
                      +60 17-242 0407
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Email</dt>
                    <dd className="mt-1 font-medium text-cyan-300/90 break-all">
                      aldo.taslim@gmail.com
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Location</dt>
                    <dd className="mt-1 text-zinc-300">
                      Petaling Jaya, Selangor
                      <br />
                      Kuala Lumpur, Malaysia
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Social</h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {contactLinks.map((el) => (
                    <motion.a
                      key={el.name}
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                    >
                      <Image alt={el.name} src={el.url} width={40} height={40} />
                    </motion.a>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center gap-2 bg-zinc-950 py-6 text-sm text-zinc-500">
        <span>Made with</span>
        <span className="text-fuchsia-500" aria-hidden>
          ♥
        </span>
        <span>by Reinaldo Taslim</span>
      </footer>
    </section>
  );
}

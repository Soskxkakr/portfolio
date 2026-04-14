import { TypeAnimation } from "react-type-animation";
import { contactLinks } from "../constants/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export default function Main() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden mesh-bg"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 pb-24 pt-28 sm:px-6 md:flex-row md:items-center md:justify-between md:pt-32 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-center md:text-left"
        >
          <motion.p
            variants={item}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90"
          >
            Software engineer · Malaysia
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">Reinaldo Taslim</span>
          </motion.h1>
          <motion.div variants={item} className="mt-4 text-xl sm:text-2xl">
            <span className="font-semibold text-zinc-300">I build </span>
            <span className="gradient-text font-semibold">
              <TypeAnimation
                sequence={[
                  "front-end experiences",
                  2200,
                  "full-stack products",
                  2200,
                  "mobile apps",
                  2200,
                ]}
                repeat={Infinity}
              />
            </span>
          </motion.div>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            Front-end / full-stack developer. Currently shipping SaaS at WebLITE
            — focused on polished UI, performance, and maintainable systems.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            {contactLinks.map((el) => (
              <motion.a
                key={el.name}
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 shadow-lg transition hover:border-cyan-500/30 hover:shadow-glow"
              >
                <Image alt={el.name} src={el.url} width={36} height={36} />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <motion.a
              href="/ReinaldoTaslim-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-base font-semibold text-zinc-950 shadow-glow transition hover:brightness-110"
            >
              View resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-8 py-3.5 text-base font-semibold text-zinc-200 backdrop-blur transition hover:border-cyan-400/40"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 16,
            delay: 0.2,
          }}
          className="relative hidden w-full max-w-lg sm:block"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-fuchsia-500/20 blur-3xl" />
          <div className="animate-float relative">
            <Image
              src="/webdev.svg"
              alt=""
              width={560}
              height={400}
              className="relative w-full drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

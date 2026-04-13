"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", route: "home" },
  { name: "About", route: "about" },
  { name: "Experiences", route: "experiences" },
  { name: "Contact", route: "contact" },
];

const linkClass =
  "relative block px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white";

const activeClass = "!text-cyan-300";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          <Link
            to="home"
            spy
            smooth
            duration={500}
            offset={-72}
            className="cursor-pointer font-mono text-sm font-semibold tracking-tight text-white md:text-base"
            onClick={() => setOpen(false)}
          >
            <span className="gradient-text">{`<Reinaldo Taslim />`}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((el) => (
              <li key={el.name}>
                <Link
                  to={el.route}
                  spy
                  smooth
                  duration={500}
                  offset={-72}
                  activeClass={activeClass}
                  className={`${linkClass} group`}
                >
                  {el.name}
                  <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-violet-400/0 transition group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-5 rounded-full bg-zinc-100"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="h-0.5 w-5 rounded-full bg-zinc-100"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-5 rounded-full bg-zinc-100"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 border-b border-white/[0.06] bg-zinc-950/95 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((el) => (
                <li key={el.name}>
                  <Link
                    to={el.route}
                    spy
                    smooth
                    duration={500}
                    offset={-72}
                    activeClass={activeClass}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

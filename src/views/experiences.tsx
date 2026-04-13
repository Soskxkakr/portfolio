"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechIcon from "@/components/tech-icon";
import { experienceData } from "@/constants/constants";
import { durationForRole, sumRoleDurations } from "@/lib/experience-duration";

export default function Experiences() {
  const [active, setActive] = useState(0);
  const [today, setToday] = useState<Date | null>(null);
  const selected = experienceData[active];

  useEffect(() => {
    setToday(new Date());
  }, []);

  const totalCareer = useMemo(
    () => (today ? sumRoleDurations(experienceData, today) : null),
    [today]
  );

  const roleDurations = useMemo(
    () =>
      today
        ? experienceData.map((el) =>
            durationForRole(el.startDate, el.endDate, today)
          )
        : null,
    [today]
  );

  const selectedDuration = roleDurations?.[active] ?? null;

  return (
    <section
      id="experiences"
      className="relative border-t border-white/[0.06] bg-zinc-950/50"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/80">
            Career
          </p>
          <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Experiences
            </h2>
            {totalCareer && (
              <p
                className="shrink-0 text-base font-medium text-zinc-400 sm:text-right md:text-lg"
                title="Sum of time in each role (gaps between jobs excluded)"
              >
                ({totalCareer.label})
              </p>
            )}
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col gap-8 md:mt-16 md:flex-row md:gap-10 lg:gap-14">
          <nav
            className="flex shrink-0 flex-col gap-1 md:w-72 md:border-r md:border-white/[0.08] md:pr-8"
            aria-label="Work history"
            role="tablist"
          >
            {experienceData.map((el, i) => {
              const isActive = i === active;
              const dur = roleDurations?.[i];
              return (
                <button
                  key={el.name}
                  type="button"
                  role="tab"
                  id={`experience-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="experience-panel"
                  onClick={() => setActive(i)}
                  className={`group relative rounded-xl px-4 py-3.5 text-left transition md:py-4 ${
                    isActive
                      ? "bg-white/[0.06] text-white ring-1 ring-cyan-500/35"
                      : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 hidden h-[calc(100%-12px)] w-0.5 -translate-y-1/2 rounded-full md:block ${
                      isActive
                        ? "bg-gradient-to-b from-cyan-400 to-violet-500"
                        : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`block text-sm font-semibold leading-snug md:text-base ${
                      isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {el.name}
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500">
                    {el.startDate} — {el.endDate ?? "Present"}
                  </span>
                  {dur && (
                    <span className="mt-0.5 block text-xs font-medium text-cyan-500/90">
                      ({dur.label})
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                role="tabpanel"
                id="experience-panel"
                aria-labelledby={`experience-tab-${active}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-6 md:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-cyan-300"
                    >
                      {selected.name}
                    </a>
                  </h3>
                  <div className="text-right text-sm">
                    <p className="font-medium text-cyan-400/90">
                      {selected.startDate} — {selected.endDate ?? "Present"}
                    </p>
                    {selectedDuration && (
                      <p className="mt-0.5 text-xs text-zinc-500">
                        ({selectedDuration.label})
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-lg font-medium text-violet-300/90">
                  {selected.position}
                </p>
                <ul className="mt-6 space-y-2">
                  {selected.description.map((desc) => (
                    <li
                      key={desc}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-400 md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/80" />
                      <span className="text-justify">{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-8">
                  {selected.tools
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((tool) => (
                      <TechIcon
                        key={tool.name}
                        name={tool.name}
                        link={tool.link}
                      />
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

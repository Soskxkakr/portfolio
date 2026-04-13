import { motion } from "framer-motion";
import Image from "next/image";
import { pictureData, techStackByCategory } from "../constants/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function About() {
  const photo = pictureData[0];

  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] bg-zinc-950/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/80">
            Profile
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            About me
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex shrink-0 justify-center md:mx-0 md:justify-start"
          >
            <div
              role="img"
              aria-label={photo.alt}
              className="aspect-square w-56 shrink-0 rounded-full bg-zinc-800 bg-cover bg-center bg-no-repeat shadow-[0_16px_48px_-16px_rgba(0,0,0,0.7)] ring-2 ring-white/[0.12] sm:w-64 md:w-72"
              style={{ backgroundImage: `url(${photo.path})` }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 space-y-6 text-lg leading-relaxed text-zinc-400"
          >
            <h3 className="text-2xl font-semibold text-white">
              A bit about me
            </h3>
            <p className="text-justify">
              I build products where design and engineering meet — shipping web
              experiences that feel fast, intentional, and maintainable. I care
              about the details users notice and the architecture they
              don&apos;t: performance, clarity, and code that teams can evolve
              with confidence.
            </p>
            <p className="text-justify">
              Away from the keyboard, I chase pace and precision on the court —
              <strong className="text-zinc-200"> pickleball</strong> and{" "}
              <strong className="text-zinc-200">badminton</strong> are my go-to
              racquet sports, and I love the rhythm of a good rally. Lately
              I&apos;ve been diving into{" "}
              <strong className="text-zinc-200">Unreal Engine 5</strong> —
              exploring game development, studying how worlds are built, and
              bringing that same curiosity for systems and polish back into
              everything I ship.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-center text-2xl font-semibold text-white md:text-left">
            Technologies &amp; stacks
          </h3>
          <div className="mt-12 space-y-12">
            {techStackByCategory.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 border-b border-white/[0.06] pb-2 text-left text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400/85">
                  {group.title}
                </h4>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  {[...group.items]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((el, index) => (
                      <motion.div
                        key={`${group.title}-${el.name}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.012 }}
                        whileHover={{ y: -4, scale: 1.03 }}
                        className="flex min-w-[140px] cursor-default items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 shadow-sm backdrop-blur transition hover:border-cyan-500/25 hover:shadow-glow"
                      >
                        <Image
                          alt=""
                          src={el.link}
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                        <span className="text-sm font-medium text-zinc-200">
                          {el.name}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

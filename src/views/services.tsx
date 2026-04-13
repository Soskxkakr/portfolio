import { serviceData } from "../constants/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/[0.06] bg-zinc-950/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400/90">
            Offerings
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Services
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-col items-stretch gap-8 md:flex-row md:justify-between">
          {serviceData.map((el) => (
            <motion.div
              key={el.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass-panel flex flex-1 flex-col items-center p-8 text-center md:max-w-sm"
            >
              <Image src={el.img} alt="" width={56} height={56} />
              <h3 className="mt-6 text-xl font-bold text-white">{el.name}</h3>
              <p className="mt-4 text-justify text-sm leading-relaxed text-zinc-400">
                {el.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

const dataGaps = [
  "Monitored but not interpreted",
  "Recorded but not standardized",
  "Available but not defensible",
];

const consequences = [
  "Export disputes",
  "Insurance friction",
  "Quality degradation",
  "Financial leakage",
];

export default function WhyNowSection() {
  return (
    <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.165 65), transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
            Market Context
          </span>
          <div className="h-px bg-border w-[60px]" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-4 leading-tight">
            India's Cold Chain Is Expanding — Accountability Has Not.
          </h2>
          <p className="font-body text-base text-primary font-medium">
            QuantTechGrid builds the standardized exposure layer to close this
            gap.
          </p>
        </motion.div>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-12"
        >
          India loses a significant portion of perishable produce due to
          temperature deviations, transit inefficiencies, and lack of
          standardized exposure interpretation.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — data gap */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-border rounded-lg p-8"
          >
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Cold storage infrastructure is scaling rapidly — but environmental
              data is often:
            </p>
            <ul className="space-y-3">
              {dataGaps.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-body text-sm text-foreground">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — consequences */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border rounded-lg p-8"
          >
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              This gap leads to:
            </p>
            <ul className="space-y-3">
              {consequences.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive/70 shrink-0" />
                  <span className="font-body text-sm text-foreground">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

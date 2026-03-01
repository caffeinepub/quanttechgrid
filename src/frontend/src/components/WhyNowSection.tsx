import { motion } from "motion/react";

const dataGaps = [
  "Monitored — but not interpreted",
  "Recorded — but not standardized",
  "Available — but not legally or commercially defensible",
];

const consequences = [
  "Product quality degradation",
  "Export rejections and disputes",
  "Invisible financial leakage",
  "Insurance claim friction",
  "Loss of trust across the value chain",
];

export default function WhyNowSection() {
  return (
    <section className="relative py-28 lg:py-40 border-b border-border overflow-hidden">
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
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
            The Accountability Gap
          </span>
          <div className="h-px bg-border w-[60px]" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-10"
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
          className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-6"
        >
          India loses a significant share of perishable produce — not because
          data doesn't exist, but because it isn't interpreted, standardized, or
          made defensible.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.13 }}
          className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-16"
        >
          Cold storage and reefer infrastructure are expanding rapidly. Sensors
          are everywhere. Data is being collected continuously.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — data gap */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border-l-2 border-primary/30 pl-8 py-2"
          >
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Yet most environmental data today is:
            </p>
            <ul className="space-y-4">
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
                  <span className="font-body text-sm text-foreground leading-relaxed">
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
          >
            <p className="font-body text-sm font-semibold text-foreground leading-relaxed mb-5">
              The Result
            </p>
            <div className="grid grid-cols-1 gap-3">
              {consequences.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  className="flex items-center gap-3 rounded-lg border border-destructive/25 bg-destructive/5 px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/70 shrink-0" />
                  <span className="font-body text-sm text-foreground leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

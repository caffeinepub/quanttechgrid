import { motion } from "motion/react";

const dataGaps = [
  {
    label: "Monitored",
    detail: "but not interpreted",
  },
  {
    label: "Recorded",
    detail: "but not standardized",
  },
  {
    label: "Available",
    detail: "but not legally or commercially defensible",
  },
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
      {/* Background — subtle diagonal pattern (matches Positioning section) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, oklch(0.72 0.165 65) 0px, oklch(0.72 0.165 65) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column — label + heading + body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
                The Accountability Gap
              </span>
              <div className="flex-1 h-px bg-border max-w-[60px]" />
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-5 leading-tight">
              India's Cold Chain Is Expanding — Accountability Has Not.
            </h2>

            <p className="font-body text-base text-primary font-medium mb-8">
              QuantTechGrid builds the standardized exposure layer to close this
              gap.
            </p>

            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              India loses a significant share of perishable produce — not
              because data doesn't exist, but because it isn't interpreted,
              standardized, or made defensible.
            </p>

            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Cold storage and reefer infrastructure are expanding rapidly.
              Sensors are everywhere. Data is being collected continuously.
            </p>
          </motion.div>

          {/* Right column — data gap cards + result boxes */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {/* Intro line */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Yet most environmental data today is:
            </p>

            {/* Data gap cards — Positioning card style */}
            <div className="grid gap-6 mb-10">
              {dataGaps.map((gap, i) => (
                <motion.div
                  key={gap.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="bg-card border border-border/50 p-6 flex gap-6 items-start hover:border-border hover:bg-secondary/30 transition-all duration-200"
                >
                  <div className="shrink-0">
                    <div className="w-px h-full min-h-[40px] bg-primary/40" />
                  </div>
                  <div>
                    <div className="font-mono-data text-xs text-primary tracking-widest uppercase mb-2">
                      {gap.label}
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      — {gap.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* The Result label */}
            <div className="font-mono-data text-xs text-primary tracking-widest uppercase mb-4">
              The Result
            </div>

            {/* Consequence boxes */}
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

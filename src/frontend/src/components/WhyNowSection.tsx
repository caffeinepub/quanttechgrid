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
          {/* Left column — all intro copy + data gap cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
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

            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Cold storage and reefer infrastructure are expanding rapidly.
              Sensors are everywhere. Data is being collected continuously.
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Yet most environmental data today is:
            </p>

            <ul className="space-y-3 pl-0 list-none">
              {dataGaps.map((gap) => (
                <li
                  key={gap.label}
                  className="font-body text-base text-muted-foreground leading-relaxed"
                >
                  <span className="text-foreground font-medium">
                    {gap.label}
                  </span>
                  {" — "}
                  {gap.detail}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right column — The Result in Positioning card style */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="font-mono-data text-xs text-primary tracking-widest uppercase mb-6">
              The Result
            </div>

            <div className="grid gap-6">
              {consequences.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="bg-card border border-border/50 p-6 flex gap-6 items-start hover:border-border hover:bg-secondary/30 transition-all duration-200"
                >
                  <div className="shrink-0">
                    <div className="w-px h-full min-h-[40px] bg-destructive/40" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

const signals = [
  {
    label: "Scalable",
    detail:
      "Software infrastructure that grows with the ecosystem, not constrained by hardware deployment cycles.",
  },
  {
    label: "Asset-Light",
    detail:
      "Integration layer model — no capital expenditure on IoT hardware. Connects to existing sensor infrastructure.",
  },
  {
    label: "Platform Play",
    detail:
      "The standardized exposure layer becomes foundational to cold-chain accountability infrastructure.",
  },
];

export default function PositioningSection() {
  return (
    <section className="relative py-28 lg:py-40 border-b border-border overflow-hidden">
      {/* Background — subtle diagonal pattern */}
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
          {/* Left — title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
                Positioning
              </span>
              <div className="flex-1 h-px bg-border max-w-[60px]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-8 leading-tight">
              A Software-First Intelligence Infrastructure
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              QuantTechGrid operates as a software-first environmental exposure
              intelligence platform. We integrate with external IoT hardware,
              interpret telemetry through structured modeling, and generate
              standardized risk documentation — independent of device
              manufacturer.
            </p>
          </motion.div>

          {/* Right — signals */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-6">
              {signals.map((signal, i) => (
                <motion.div
                  key={signal.label}
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
                    <div className="font-mono-data text-xs text-primary tracking-widest uppercase mb-3">
                      {signal.label}
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {signal.detail}
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

import { motion } from "motion/react";

const gaps = [
  {
    label: "Infrastructure Expansion",
    detail:
      "India's cold-chain infrastructure is expanding rapidly at an unprecedented pace.",
  },
  {
    label: "Accountability Gap",
    detail:
      "Accountability systems have not scaled at the same pace, creating structural risk.",
  },
  {
    label: "Dispute Friction",
    detail:
      "The gap creates dispute friction, insurance leakage, and inconsistent exposure interpretation.",
  },
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
                Market Context
              </span>
              <div className="flex-1 h-px bg-border max-w-[60px]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-8 leading-tight">
              Why Now
            </h2>
            <div className="data-line">
              <p className="font-body text-base text-foreground leading-relaxed">
                QuantTechGrid builds the standardized exposure layer to close
                this gap.
              </p>
            </div>
          </motion.div>

          {/* Right — structured gap analysis */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-0"
          >
            {gaps.map((gap, i) => (
              <motion.div
                key={gap.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="border-b border-border py-6 first:border-t first:pt-0 last:border-b-0 last:pb-0 flex gap-6 items-start"
              >
                <span className="font-mono-data text-xs text-primary/60 mt-0.5 shrink-0 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-display font-semibold text-sm text-foreground mb-1 tracking-tight">
                    {gap.label}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {gap.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

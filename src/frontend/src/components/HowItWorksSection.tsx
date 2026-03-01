import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Capture Environmental Telemetry",
    body: "Continuous temperature and humidity capture across transit corridors.",
    detail:
      "IoT sensor integration across the full cold-chain transit corridor.",
  },
  {
    number: "02",
    title: "Apply Scientific Exposure Modeling",
    body: "Cumulative degradation modeling based on commodity-specific sensitivity parameters.",
    detail:
      "Internationally referenced shelf-life science applied to raw telemetry streams.",
  },
  {
    number: "03",
    title: "Generate Defensible Documentation",
    body: "Structured exposure summaries for exporters, buyers, insurers, and regulators.",
    detail:
      "Audit-ready, tamper-evident output designed for multi-stakeholder review.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 lg:py-40 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
              Process
            </span>
            <div className="flex-1 h-px bg-border max-w-[60px]" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground max-w-2xl">
            How Structured Exposure Intelligence Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-card border border-border/50 p-10 lg:p-12 hover:border-border hover:bg-secondary/30 transition-all duration-200"
            >
              {/* Step number */}
              <div className="mb-8">
                <div className="w-8 h-8 border border-primary/40 flex items-center justify-center">
                  <span className="font-mono-data text-xs text-primary tracking-widest">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-semibold text-base text-foreground mb-3 tracking-tight leading-snug">
                {step.title}
              </h3>
              <p className="font-body text-sm text-foreground/90 leading-relaxed mb-4">
                {step.body}
              </p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {step.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

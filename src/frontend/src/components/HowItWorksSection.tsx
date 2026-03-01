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
      className="relative py-24 lg:py-32 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
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
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border"
            style={{
              left: "calc(1.25rem + 24px)",
              right: "calc(1.25rem + 24px)",
            }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-0 lg:gap-px bg-transparent lg:bg-border">
            {steps.map((step, i) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-background lg:bg-card p-0 lg:p-10 relative border-b lg:border-b-0 border-border last:border-b-0"
              >
                {/* Mobile layout */}
                <div className="py-8 lg:py-0 flex gap-6 lg:block">
                  {/* Step number */}
                  <div className="shrink-0 lg:mb-8">
                    <div className="w-8 h-8 border border-primary/40 flex items-center justify-center">
                      <span className="font-mono-data text-xs text-primary tracking-widest">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-foreground/90 leading-relaxed mb-3">
                      {step.body}
                    </p>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

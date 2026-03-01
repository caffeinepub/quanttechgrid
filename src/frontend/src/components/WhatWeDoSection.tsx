import { AlertTriangle, FileText, Shield, Thermometer } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    icon: Thermometer,
    number: "01",
    title: "Environmental Exposure Analysis",
    body: "Transforms temperature, humidity, and time data into cumulative degradation insights using internationally recognized shelf-life science.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Defensible Impact Documentation",
    body: "Converts exposure data into structured commercial impact records — producing tamper-evident, audit-ready summaries that support claim defensibility and underwriting clarity.",
  },
  {
    icon: AlertTriangle,
    number: "03",
    title: "Proactive Risk Alerts",
    body: "Detects emerging shelf-life risks early, enabling timely operational interventions to prevent irreversible product degradation.",
  },
  {
    icon: Shield,
    number: "04",
    title: "Compliance-Ready Evidence Generation",
    body: "Delivers standardized, regulator- and insurer-aligned documentation that ensures transparency and trust across exporters, buyers, and insurers.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
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
              Capabilities
            </span>
            <div className="flex-1 h-px bg-border max-w-[60px]" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground max-w-2xl">
            From Telemetry to Structured Exposure Intelligence
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.number}
                variants={itemVariants}
                className="bg-card border border-border/50 p-8 group hover:border-border hover:bg-secondary/30 transition-all duration-200"
              >
                <div className="mb-6 flex items-start justify-between">
                  <Icon
                    size={20}
                    className="text-primary mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="font-mono-data text-xs text-muted-foreground/50 tracking-widest">
                    {card.number}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-3 leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {card.body}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

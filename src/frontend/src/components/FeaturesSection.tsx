import { FileCheck, Route, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Route,
    label: "A",
    title: "Operational Risk Intervention",
    body: "Early risk signals enable route adjustments, expedited delivery, and mitigation before quality thresholds are breached.",
  },
  {
    icon: TrendingUp,
    label: "B",
    title: "Cumulative Risk Forecasting",
    body: "Exposure-based modeling anticipates threshold breaches based on time–temperature trajectory rather than isolated sensor deviations.",
  },
  {
    icon: FileCheck,
    label: "C",
    title: "Structured Exposure Certification",
    body: "Standardized exposure summaries designed to reduce ambiguity in claim assessment and commercial dispute resolution.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-28 lg:py-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-20">
          <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
            Intelligence Layer
          </span>
          <div className="flex-1 h-px bg-border max-w-[60px]" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group"
              >
                {/* Icon + number header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 border border-border/50 group-hover:border-primary/40 flex items-center justify-center transition-colors duration-200">
                    <Icon
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="h-px flex-1 bg-border/50" />
                  <span className="font-mono-data text-xs text-muted-foreground/40 tracking-widest">
                    {feature.label}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-4 tracking-tight leading-snug">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

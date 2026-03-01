import { Package, Scale, Truck } from "lucide-react";
import { motion } from "motion/react";

const segments = [
  {
    icon: Package,
    title: "Exporters",
    body: "Reduce documentation disputes and strengthen buyer confidence.",
    attributes: [
      "Defensible exposure summaries",
      "Buyer-ready documentation",
      "Dispute risk reduction",
    ],
  },
  {
    icon: Truck,
    title: "Cold-Chain Operators",
    body: "Improve SLA defensibility and operational visibility.",
    attributes: [
      "Real-time cumulative exposure tracking",
      "SLA compliance documentation",
      "Operational intervention signals",
    ],
  },
  {
    icon: Scale,
    title: "Insurers",
    body: "Standardize inland exposure interpretation and reduce claim ambiguity.",
    attributes: [
      "Structured claim evidence",
      "Standardized inland assessment",
      "Underwriting intelligence",
    ],
  },
];

export default function ForWhomSection() {
  return (
    <section
      id="for-whom"
      className="relative py-24 lg:py-32 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
              For Whom
            </span>
            <div className="flex-1 h-px bg-border max-w-[60px]" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground max-w-2xl">
            Built for High-Stakes Supply Chains
          </h2>
        </motion.div>

        {/* Segments */}
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.article
                key={seg.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-card p-8 lg:p-10 group hover:bg-secondary/40 transition-colors duration-300"
              >
                <div className="mb-6">
                  <Icon size={22} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2 tracking-tight">
                  {seg.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {seg.body}
                </p>

                <ul className="space-y-2">
                  {seg.attributes.map((attr) => (
                    <li key={attr} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="font-mono-data text-xs text-muted-foreground/80 leading-relaxed">
                        {attr}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

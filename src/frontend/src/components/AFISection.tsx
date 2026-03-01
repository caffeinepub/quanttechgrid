import { motion } from "motion/react";

export default function AFISection() {
  return (
    <section
      id="afi"
      className="relative py-24 lg:py-32 border-b border-border overflow-hidden"
    >
      {/* Accent background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.14 0.014 252) 0%, oklch(0.16 0.016 252) 50%, oklch(0.14 0.012 252) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Index label column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
                Index
              </span>
              <div className="flex-1 h-px bg-border max-w-[40px]" />
            </div>
            <div className="font-display font-bold text-6xl lg:text-8xl text-primary/10 tracking-tight select-none leading-none">
              AFI
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-9"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-foreground mb-4">
              Agri-Freshness Integrity Index (AFI)
            </h2>
            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              A structured environmental exposure index that interprets
              cumulative temperature impact across time — enabling consistent
              risk communication across stakeholders.
            </p>

            {/* Attributes */}
            <div className="grid sm:grid-cols-3 gap-px bg-border">
              {[
                {
                  label: "Cumulative",
                  detail:
                    "Time-integrated exposure, not point-in-time readings",
                },
                {
                  label: "Structured",
                  detail: "Standardized output format for cross-party use",
                },
                {
                  label: "Defensible",
                  detail: "Audit-trail backed interpretation methodology",
                },
              ].map((attr) => (
                <div key={attr.label} className="bg-card p-5">
                  <div className="font-mono-data text-xs text-primary tracking-widest uppercase mb-2">
                    {attr.label}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {attr.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

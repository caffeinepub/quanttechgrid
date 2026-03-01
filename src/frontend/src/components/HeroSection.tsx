import { Button } from "@/components/ui/button";
import { useIncrementDownloadCount } from "@/hooks/useQueries";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function HeroSection() {
  const incrementDownload = useIncrementDownloadCount();

  const handlePilotClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = async () => {
    try {
      await incrementDownload.mutateAsync();
      toast.success("Framework Brief requested", {
        description:
          "Our team will send the Exposure Framework Brief to your inbox shortly.",
      });
    } catch {
      toast.error("Request failed", {
        description: "Please try again or contact us directly.",
      });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
      aria-label="Hero"
    >
      {/* Diagonal accent line */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.72 0.165 65), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04]"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, oklch(0.45 0.08 252), transparent 70%)",
          }}
        />
        {/* Horizontal rule accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground mb-6"
          >
            The Structured Environmental Exposure Layer for Cold-Chain.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl"
          >
            QuantTechGrid converts raw temperature telemetry into structured,
            defensible risk intelligence for exporters, logistics operators, and
            insurers.
          </motion.p>

          {/* Supporting Line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="data-line">
              <p className="text-sm font-mono-data text-muted-foreground leading-relaxed">
                Not monitoring. Not dashboards.{" "}
                <span className="text-foreground font-medium">
                  Environmental exposure interpretation — standardized,
                  auditable, decision-ready.
                </span>
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <Button
              onClick={handlePilotClick}
              className="rounded-none h-11 px-6 font-body font-medium tracking-wide text-sm group"
            >
              Request Structured Pilot
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={handleDownload}
              disabled={incrementDownload.isPending}
              className="rounded-none h-11 px-6 font-body font-medium tracking-wide text-sm bg-transparent border-border hover:bg-secondary"
            >
              {incrementDownload.isPending ? (
                <span className="animate-pulse">Requesting...</span>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download Exposure Framework Brief
                </>
              )}
            </Button>
          </motion.div>
        </div>

        {/* Bottom data strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              "Environmental Performance Telemetry",
              "Cumulative Degradation Modeling",
              "Insurance-Ready Documentation",
              "Audit-Ready Evidence Chains",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <span className="text-xs font-mono-data text-muted-foreground tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

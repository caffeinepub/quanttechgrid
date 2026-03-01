import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitPilotRequest } from "@/hooks/useQueries";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  company: string;
  email: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const submitRequest = useSubmitPilotRequest();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, company, email, message } = form;
    if (!name.trim() || !company.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      await submitRequest.mutateAsync({ name, company, email, message });
      setSubmitted(true);
      setForm(emptyForm);
    } catch {
      toast.error("Submission failed", {
        description: "Please try again or contact us directly.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono-data text-primary tracking-widest uppercase">
                Pilot Program
              </span>
              <div className="flex-1 h-px bg-border max-w-[60px]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
              Request Structured Pilot
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Submit your request to begin the structured pilot intake process.
              Our team will assess your supply chain context and respond within
              2 business days.
            </p>

            <div className="space-y-4">
              {[
                "Structured onboarding assessment",
                "Commodity-specific exposure modeling setup",
                "Integration pathway review",
                "Pilot documentation framework delivery",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-none rotate-45 shrink-0 mt-1.5" />
                  <span className="font-body text-sm text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={36} className="text-primary mb-4" />
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    Request Received
                  </h3>
                  <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed">
                    Your structured pilot request has been submitted. Our team
                    will review your details and respond within 2 business days.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-none font-body text-sm tracking-wide"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-mono-data text-xs tracking-widest uppercase text-muted-foreground"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="rounded-none bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-0 h-10 font-body text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="company"
                        className="font-mono-data text-xs tracking-widest uppercase text-muted-foreground"
                      >
                        Company *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="Acme Exports Ltd."
                        className="rounded-none bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-0 h-10 font-body text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-mono-data text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="rounded-none bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-0 h-10 font-body text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-mono-data text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Briefly describe your supply chain context, commodities handled, and current documentation challenges..."
                      rows={5}
                      className="rounded-none bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-0 font-body text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitRequest.isPending}
                    className="w-full rounded-none h-11 font-body font-medium tracking-wide text-sm"
                  >
                    {submitRequest.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>

                  <p className="font-mono-data text-xs text-muted-foreground/50 text-center">
                    Your information is handled with strict confidentiality.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

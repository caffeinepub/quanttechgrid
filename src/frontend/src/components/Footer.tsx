const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Whom", href: "#for-whom" },
  { label: "Framework", href: "#afi" },
  { label: "Request Pilot", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-none rotate-45" />
              <span className="font-display font-semibold text-base tracking-tight text-foreground">
                QuantTechGrid
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Quantifying Environmental Exposure.
              <br />
              Standardizing Cold-Chain Accountability.
            </p>

            {/* DPIIT badge */}
            <div className="mt-6 inline-flex items-center gap-2 border border-border px-3 py-1.5">
              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
              <span className="font-mono-data text-xs text-muted-foreground tracking-wide">
                DPIIT-Recognized Cold-Chain Risk Intelligence Platform
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-3 lg:col-start-8">
            <div className="font-mono-data text-xs text-muted-foreground/50 tracking-widest uppercase mb-4">
              Navigation
            </div>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact block */}
          <div className="lg:col-span-4">
            <div className="font-mono-data text-xs text-muted-foreground/50 tracking-widest uppercase mb-4">
              Platform
            </div>
            <div className="space-y-3">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Software-first environmental exposure intelligence for
                cold-chain supply chains.
              </p>
              <div className="font-mono-data text-xs text-muted-foreground/60 space-y-1">
                <div>Temperature · Humidity · Time</div>
                <div>Structured · Defensible · Audit-Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono-data text-xs text-muted-foreground/50">
            © {year} QuantTechGrid. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-data text-xs text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

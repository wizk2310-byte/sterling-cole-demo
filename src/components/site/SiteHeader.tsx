import { Link } from "@tanstack/react-router";
import { Menu, Phone, Scale, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Cta } from "./Cta";
import { cn } from "@/lib/utils";

const links = [
  { label: "Practice Areas", href: "/#practice-areas" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Attorneys", href: "/#attorneys" },
  { label: "Results", href: "/#results" },
  { label: "Testimonials", href: "/#testimonials" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <Scale className="h-7 w-7 shrink-0 text-brass" strokeWidth={1.4} />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight tracking-wide text-foreground sm:text-xl">
              Sterling &amp; Cole
            </span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Law Group
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brass"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+18005550142"
            className="hidden items-center gap-2 text-[0.78rem] font-semibold tracking-wide text-foreground transition-colors hover:text-brass lg:flex"
          >
            <Phone className="h-4 w-4 text-brass" strokeWidth={1.6} />
            (800) 555-0142
          </a>

          <Cta asChild size="sm" className="hidden sm:inline-flex">
            <a href="/#consultation">Free Consultation</a>
          </Cta>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-brass hover:text-brass xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/98 px-5 py-4 backdrop-blur-xl xl:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-brass"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Cta asChild className="w-full">
                <a href="/#consultation" onClick={() => setOpen(false)}>
                  Schedule a Consultation
                </a>
              </Cta>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Scale, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <Scale className="h-7 w-7 shrink-0 text-brass" strokeWidth={1.4} />
              <span>
                <span className="block font-display text-xl leading-tight">
                  Sterling &amp; Cole
                </span>
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Law Group
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A trial-tested firm representing individuals, families, and
              businesses across the state since 1987.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "X" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:text-brass"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Practice Areas"
            items={[
              "Personal Injury",
              "Family Law",
              "Business Law",
              "Real Estate",
              "Criminal Defense",
              "Estate Planning",
            ]}
            href="/#practice-areas"
          />
          <FooterCol
            title="Firm"
            items={["Our Attorneys", "Case Results", "Testimonials", "Careers"]}
            href="/#attorneys"
          />

          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brass">
              Office
            </h3>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
              <p>1400 Wexford Avenue, Suite 2200</p>
              <p>Harborview, CA 90210</p>
              <p className="pt-2">
                <a href="tel:+18005550142" className="hover:text-brass">
                  (800) 555-0142
                </a>
              </p>
              <p>
                <a
                  href="mailto:intake@sterlingcole.example"
                  className="hover:text-brass"
                >
                  intake@sterlingcole.example
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground/80">
            <strong className="font-semibold text-muted-foreground">
              Disclaimer:
            </strong>{" "}
            Sterling &amp; Cole Law Group is a fictional firm and this site is a
            design demonstration. Nothing here constitutes legal advice, and no
            attorney-client relationship is created by viewing this site or
            submitting the consultation form. Prior results do not guarantee a
            similar outcome. Case results depend on the specific facts and legal
            circumstances of each matter.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Sterling &amp; Cole Law Group.
              All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link to="/" className="hover:text-brass">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-brass">
                Terms of Use
              </Link>
              <Link to="/" className="hover:text-brass">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  href,
}: {
  title: string;
  items: string[];
  href: string;
}) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brass">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>
            <a href={href} className="transition-colors hover:text-brass">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

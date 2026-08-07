import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Gavel,
  HeartHandshake,
  Scale,
  ScrollText,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const areas = [
  {
    Icon: Scale,
    title: "Personal Injury",
    blurb:
      "Catastrophic injury, auto collisions, premises liability, and wrongful death claims litigated for maximum recovery.",
    points: ["No fee unless we win", "Trial-ready from day one"],
  },
  {
    Icon: HeartHandshake,
    title: "Family Law",
    blurb:
      "Divorce, custody, support, and complex asset division handled with discretion and steady guidance.",
    points: ["Mediation & litigation", "Child-centered strategy"],
  },
  {
    Icon: Briefcase,
    title: "Business & Corporate",
    blurb:
      "Formation, contracts, partnership disputes, and commercial litigation for founders and established companies.",
    points: ["Outside general counsel", "M&A and governance"],
  },
  {
    Icon: Building2,
    title: "Real Estate Law",
    blurb:
      "Purchase and sale, title disputes, landlord-tenant matters, zoning, and development transactions.",
    points: ["Residential & commercial", "Closings and due diligence"],
  },
  {
    Icon: Gavel,
    title: "Criminal Defense",
    blurb:
      "State and federal defense from first contact through verdict, with immediate response at any hour.",
    points: ["Former prosecutors on staff", "24/7 arrest response"],
  },
  {
    Icon: ScrollText,
    title: "Estate Planning",
    blurb:
      "Wills, trusts, powers of attorney, probate administration, and multigenerational wealth transfer.",
    points: ["Tax-efficient structures", "Probate & trust litigation"],
  },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Practice Areas"
          title="Full-service counsel across six core disciplines"
          description="Each matter is staffed by attorneys who practice in that field exclusively — never handed to a generalist."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ Icon, title, blurb, points }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="h-full">
              <a
                href="#consultation"
                className="group relative flex h-full flex-col bg-surface p-8 transition-colors duration-500 hover:bg-surface-raised lg:p-10"
              >
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100" />
                <Icon
                  className="h-8 w-8 text-brass transition-transform duration-500 group-hover:-translate-y-0.5"
                  strokeWidth={1.3}
                />
                <h3 className="mt-6 font-display text-2xl text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {blurb}
                </p>
                <ul className="mt-6 space-y-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-foreground/60"
                    >
                      <span className="h-1 w-1 rounded-full bg-brass" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brass opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Discuss your case
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { Mail } from "lucide-react";
import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const attorneys = [
  {
    image: attorney1,
    name: "Marcus Sterling",
    role: "Founding Partner — Trial & Personal Injury",
    bio: "Marcus has tried more than 90 civil jury trials and led the firm's largest recoveries, including a $12.4M verdict in a commercial trucking case.",
    credentials: [
      "J.D., Columbia Law School",
      "AV Preeminent, Martindale-Hubbell",
      "Fellow, American College of Trial Lawyers",
    ],
    admissions: "Admitted: California, New York, U.S. District Court (C.D. Cal.)",
  },
  {
    image: attorney2,
    name: "Adaeze Cole",
    role: "Managing Partner — Family & Estate Law",
    bio: "Adaeze guides clients through high-asset divorce, custody, and succession planning, and is a certified family law specialist and trained mediator.",
    credentials: [
      "J.D., UC Berkeley School of Law",
      "Certified Family Law Specialist (CBLS)",
      "Super Lawyers, 2016–2026",
    ],
    admissions: "Admitted: California, Nevada, U.S. Tax Court",
  },
  {
    image: attorney3,
    name: "Rohan Mehta",
    role: "Partner — Business, Real Estate & Defense",
    bio: "A former deputy district attorney, Rohan now handles commercial litigation, development transactions, and white-collar defense for the firm.",
    credentials: [
      "J.D., Georgetown University Law Center",
      "Former Deputy District Attorney",
      "Rising Stars, 2019–2024",
    ],
    admissions: "Admitted: California, U.S. Court of Appeals (9th Cir.)",
  },
];

export function Attorneys() {
  return (
    <section id="attorneys" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Meet the Attorneys"
          title="Senior counsel on every matter"
          description="Three partners, one standard. You'll know exactly who is handling your case and how to reach them."
        />

        <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((a, i) => (
            <Reveal as="li" key={a.name} delay={i * 110}>
              <article className="group panel h-full overflow-hidden rounded-sm transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant">
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={a.image}
                    alt={`Portrait of ${a.name}`}
                    loading="lazy"
                    width={800}
                    height={1008}
                    className="h-full w-full object-cover object-top grayscale-[35%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-card to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-foreground">
                    {a.name}
                  </h3>
                  <p className="mt-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brass">
                    {a.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {a.bio}
                  </p>
                  <ul className="mt-5 space-y-1.5 border-t border-border pt-5">
                    {a.credentials.map((c) => (
                      <li
                        key={c}
                        className="flex gap-2 text-xs leading-relaxed text-foreground/70"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[0.7rem] leading-relaxed text-muted-foreground/80">
                    {a.admissions}
                  </p>
                  <a
                    href="#consultation"
                    className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brass transition-colors hover:text-brass-soft"
                  >
                    <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Contact {a.name.split(" ")[0]}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

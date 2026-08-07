import { Clock, HandCoins, Scale, Trophy, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    Icon: Trophy,
    title: "120+ years combined experience",
    body: "Our partners have tried cases in state, federal, and appellate courts across three decades of practice.",
  },
  {
    Icon: Scale,
    title: "A verdict-tested track record",
    body: "We prepare every matter for trial. Opposing counsel knows it, and it changes what a settlement looks like.",
  },
  {
    Icon: Users,
    title: "Client-first representation",
    body: "You work directly with your attorney — not a rotating case manager. Calls returned same business day.",
  },
  {
    Icon: HandCoins,
    title: "Free initial consultations",
    body: "An honest assessment of your options at no cost, with contingency fees available on injury matters.",
  },
  {
    Icon: Clock,
    title: "Available when it counts",
    body: "Urgent matters reach an attorney 24 hours a day, including arraignments, injunctions, and emergencies.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Why Sterling & Cole"
              title="Clients don't hire a firm. They hire the people who show up."
              description="We keep our caseload deliberately limited so that every client receives senior attention from intake through resolution."
            />
            <Reveal delay={150}>
              <blockquote className="mt-10 border-l-2 border-brass pl-6 font-display text-xl leading-relaxed text-foreground/85 sm:text-2xl">
                &ldquo;Preparation is the only advantage that never fails a
                client.&rdquo;
                <footer className="mt-4 font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Marcus Sterling &mdash; Founding Partner
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <ul className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
            {pillars.map(({ Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 70}>
                <div className="group flex gap-6 bg-background p-7 transition-colors duration-500 hover:bg-surface-raised lg:p-8">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-border-strong text-brass transition-all duration-500 group-hover:bg-brass group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

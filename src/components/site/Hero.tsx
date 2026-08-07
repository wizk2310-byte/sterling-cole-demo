import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-courthouse.jpg";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Stone colonnade of a historic courthouse at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="absolute inset-0 bg-background/45" />

      <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-24 sm:px-8 lg:pt-52 lg:pb-36">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-brass block" />
              <span className="eyebrow">Est. 1987 &middot; Harborview, CA</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 font-display text-[2.7rem] leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Protecting what matters most with
              <span className="text-brass-gradient"> relentless advocacy.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              For nearly four decades, Sterling &amp; Cole has represented
              individuals, families, and businesses in the matters that define
              their futures. More than 120 years of combined trial experience,
              over $180 million recovered, and a record built on preparation —
              not promises.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta asChild size="lg">
                <a href="#consultation">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Cta>
              <Cta asChild variant="outline" size="lg">
                <a href="#practice-areas">Our Practice Areas</a>
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
              {[
                { Icon: ShieldCheck, text: "Free, confidential case review" },
                { Icon: Award, text: "AV Preeminent rated attorneys" },
                { Icon: ShieldCheck, text: "Available 24/7 for urgent matters" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-brass" strokeWidth={1.6} />
                  <span className="text-[0.8rem] font-medium tracking-wide text-foreground/70">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { to: 180, prefix: "$", suffix: "M+", label: "Recovered for clients" },
  { to: 2400, suffix: "+", label: "Matters resolved" },
  { to: 98, suffix: "%", label: "Favorable outcome rate" },
  { to: 39, label: "Years in practice" },
];

const results = [
  {
    amount: "$12.4M",
    type: "Commercial trucking collision",
    detail: "Jury verdict after a four-week trial for a client with spinal injuries.",
  },
  {
    amount: "$6.8M",
    type: "Premises liability",
    detail: "Confidential settlement reached on the eve of trial for a family of four.",
  },
  {
    amount: "Dismissed",
    type: "Federal white-collar defense",
    detail: "All counts dismissed following a successful suppression motion.",
  },
  {
    amount: "$3.1M",
    type: "Partnership dissolution",
    detail: "Recovery of misappropriated capital for a minority business owner.",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="scroll-mt-24 border-y border-border bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Case Results"
          title="A track record measured in outcomes"
          align="center"
          description="Representative matters from the last decade. Prior results do not guarantee a similar outcome."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 90}>
              <div className="bg-background px-6 py-12 text-center">
                <p className="font-display text-5xl leading-none text-brass lg:text-6xl">
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <ul className="mt-8 grid gap-8 lg:grid-cols-2">
          {results.map((r, i) => (
            <Reveal as="li" key={r.type} delay={i * 90}>
              <div className="group grid grid-cols-[minmax(0,1fr)] items-start gap-5 rounded-sm border border-border bg-background p-7 transition-all duration-500 hover:border-border-strong hover:bg-surface-raised sm:grid-cols-[auto_minmax(0,1fr)]">
                <p className="shrink-0 font-display text-3xl text-brass sm:w-40">
                  {r.amount}
                </p>
                <div className="min-w-0 border-border sm:border-l sm:pl-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                    {r.type}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

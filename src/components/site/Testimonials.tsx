import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "After my accident I couldn't work and the insurer stopped returning calls. Marcus took the case to trial and recovered more than I thought possible. He explained every step in plain language.",
    name: "Daniel R.",
    matter: "Personal Injury Client",
  },
  {
    quote:
      "Adaeze handled my divorce with a calm I badly needed. She protected my relationship with my children and never let the process turn ugly. I felt represented, not managed.",
    name: "Priya S.",
    matter: "Family Law Client",
  },
  {
    quote:
      "Our partnership dispute threatened the company I spent twelve years building. Rohan found the documents that ended it and we settled on our terms within four months.",
    name: "Elena M.",
    matter: "Business Litigation Client",
  },
  {
    quote:
      "They answered the phone at 2 a.m. when my son was arrested and an attorney was at the arraignment that morning. That kind of response is why I recommend this firm to everyone.",
    name: "Gregory T.",
    matter: "Criminal Defense Client",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What clients say when the matter is over"
          align="center"
        />

        <ul className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100}>
              <figure className="panel group relative h-full rounded-sm p-8 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant lg:p-10">
                <Quote
                  className="absolute right-7 top-7 h-10 w-10 text-brass/15 transition-colors duration-500 group-hover:text-brass/30"
                  strokeWidth={1.2}
                />
                <div className="flex gap-1" aria-label="Rated 5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-brass text-brass"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-lg leading-relaxed text-foreground/85 sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="text-sm font-bold tracking-wide text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brass">
                    {t.matter}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

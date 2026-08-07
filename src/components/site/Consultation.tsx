import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import mapImage from "@/assets/map-placeholder.jpg";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const caseTypes = [
  "Personal Injury",
  "Family Law",
  "Business & Corporate",
  "Real Estate",
  "Criminal Defense",
  "Estate Planning",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a reachable phone number")
    .max(25),
  email: z.string().trim().email("Please enter a valid email").max(255),
  caseType: z.string().min(1, "Please select a case type"),
  details: z
    .string()
    .trim()
    .min(20, "A few sentences helps us prepare (20 characters minimum)")
    .max(1500, "Please keep the summary under 1500 characters"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-brass focus:outline-none focus:ring-1 focus:ring-ring";
const labelClass =
  "block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground";

export function Consultation() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", caseType: "", details: "" },
  });

  const onSubmit = async (_values: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Consultation request received", {
      description:
        "An attorney will contact you within one business day. This is a demo form — nothing was sent.",
    });
    reset();
  };

  return (
    <section
      id="consultation"
      className="scroll-mt-24 border-t border-border bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Free Consultation"
          title="Tell us what happened. We'll tell you where you stand."
          description="Every submission is reviewed by an attorney, kept confidential, and answered within one business day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="panel rounded-sm p-7 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    className={`mt-2 ${fieldClass}`}
                    placeholder="Jordan Avery"
                    autoComplete="name"
                    {...register("name")}
                  />
                  <FieldError message={errors.name?.message} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`mt-2 ${fieldClass}`}
                    placeholder="(555) 018-2244"
                    autoComplete="tel"
                    {...register("phone")}
                  />
                  <FieldError message={errors.phone?.message} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`mt-2 ${fieldClass}`}
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...register("email")}
                  />
                  <FieldError message={errors.email?.message} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="caseType">
                    Case type
                  </label>
                  <select
                    id="caseType"
                    className={`mt-2 ${fieldClass}`}
                    defaultValue=""
                    {...register("caseType")}
                  >
                    <option value="" disabled>
                      Select a practice area
                    </option>
                    {caseTypes.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.caseType?.message} />
                </div>
              </div>

              <div className="mt-6">
                <label className={labelClass} htmlFor="details">
                  Brief description
                </label>
                <textarea
                  id="details"
                  rows={5}
                  maxLength={1500}
                  className={`mt-2 resize-none ${fieldClass}`}
                  placeholder="Share what happened, when it happened, and any deadlines you're aware of."
                  {...register("details")}
                />
                <FieldError message={errors.details?.message} />
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Cta type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Request My Consultation"}
                </Cta>
                <p className="max-w-xs text-[0.7rem] leading-relaxed text-muted-foreground">
                  Submitting this form does not create an attorney-client
                  relationship.
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={150} className="space-y-8">
            <ul className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
              {[
                {
                  Icon: MapPin,
                  title: "Office",
                  lines: ["1400 Wexford Avenue, Suite 2200", "Harborview, CA 90210"],
                },
                {
                  Icon: Phone,
                  title: "Phone",
                  lines: ["(800) 555-0142", "24/7 for urgent matters"],
                },
                {
                  Icon: Mail,
                  title: "Email",
                  lines: ["intake@sterlingcole.example"],
                },
                {
                  Icon: Clock,
                  title: "Hours",
                  lines: [
                    "Mon–Fri: 8:00 AM – 6:30 PM",
                    "Sat: By appointment",
                  ],
                },
              ].map(({ Icon, title, lines }) => (
                <li key={title} className="flex gap-5 bg-background p-6">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-brass"
                    strokeWidth={1.5}
                  />
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brass">
                      {title}
                    </p>
                    {lines.map((l) => (
                      <p key={l} className="mt-1 text-sm text-foreground/80">
                        {l}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <div className="group relative overflow-hidden rounded-sm border border-border">
              <img
                src={mapImage}
                alt="Illustrated map showing the firm's downtown Harborview office location"
                loading="lazy"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-background/85 px-5 py-4 backdrop-blur-sm">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground">
                  Downtown Harborview
                </p>
                <span className="text-[0.7rem] font-semibold tracking-wide text-brass">
                  Map placeholder
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-2 text-xs text-destructive">{message}</p>;
}

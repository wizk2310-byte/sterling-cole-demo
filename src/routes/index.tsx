import { createFileRoute } from "@tanstack/react-router";
import { Attorneys } from "@/components/site/Attorneys";
import { Consultation } from "@/components/site/Consultation";
import { Hero } from "@/components/site/Hero";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Results } from "@/components/site/Results";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";

const title = "Sterling & Cole Law Group | Trial Attorneys in Harborview, CA";
const description =
  "Sterling & Cole Law Group represents clients in personal injury, family, business, real estate, criminal defense, and estate matters. Free consultations, 120+ years combined experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Sterling & Cole Law Group",
  description,
  telephone: "+1-800-555-0142",
  email: "intake@sterlingcole.example",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1400 Wexford Avenue, Suite 2200",
    addressLocality: "Harborview",
    addressRegion: "CA",
    postalCode: "90210",
    addressCountry: "US",
  },
  areaServed: "California",
  priceRange: "Free initial consultation",
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PracticeAreas />
        <WhyUs />
        <Attorneys />
        <Results />
        <Testimonials />
        <Consultation />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

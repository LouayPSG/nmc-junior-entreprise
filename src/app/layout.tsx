import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site, contact, social } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.social.website),
  title: {
    default: "NMC Junior Entreprise — Conseil marketing étudiant à Nabeul | FSEGN",
    template: "%s | NMC Junior Entreprise",
  },
  description:
    "NMC Junior Entreprise (Neapolis Marketing Consulting), Junior Entreprise de la FSEGN à Nabeul : études de marché, marketing digital et conseil marketing par des étudiants formés aux méthodes professionnelles.",
  keywords: [
    "Junior Entreprise Nabeul",
    "marketing étudiant Tunisie",
    "consulting FSEGN",
    "NMC Junior Entreprise",
    "étude de marché Nabeul",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.social.website,
    siteName: site.name,
    title: "NMC Junior Entreprise — Conseil marketing étudiant à Nabeul | FSEGN",
    description:
      "NMC Junior Entreprise accompagne les entreprises de la région de Nabeul : études, marketing digital, branding. Innover ensemble pour transformer les projets en réussites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NMC Junior Entreprise — Conseil marketing étudiant à Nabeul",
    description:
      "NMC Junior Entreprise (FSEGN Nabeul) : le professionnalisme étudiant au service du marketing local.",
  },
  robots: { index: true, follow: true },
};

/** JSON-LD LocalBusiness/Organization — cohérence NAP pour le SEO local */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.fullName,
  alternateName: site.name,
  url: site.social.website,
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Faculté des Sciences Économiques et de Gestion de Nabeul, Mrezga",
    addressLocality: "Nabeul",
    postalCode: "8000",
    addressCountry: "TN",
  },
  sameAs: [social.instagram, social.facebook, social.linkedin],
  slogan: site.baseline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={jsonLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

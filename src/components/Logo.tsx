import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  href?: string;
  className?: string;
}

/**
 * Logotype officiel NMC.
 * - variant "dark" : logo rouge & noir (fond clair) — navbar, en-têtes.
 * - variant "light" : logo blanc (fond sombre) — footer, CTA noirs.
 * Fichiers : public/assets/logo/nmc-logo.png / nmc-logo-blanc.png.
 */
export default function Logo({ variant = "dark", href = "/", className = "" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center no-underline ${className}`}
      aria-label="NMC Junior Entreprise — Accueil"
    >
      <Image
        src={isLight ? "/assets/logo/nmc-logo-blanc.png" : "/assets/logo/nmc-logo.png"}
        alt="NMC — Neapolis Marketing Consulting, Junior Entreprise de la FSEGN"
        width={92}
        height={61}
        priority
        className={`w-auto transition-opacity group-hover:opacity-80 ${isLight ? "h-12 md:h-14" : "h-10 md:h-12"}`}
      />
    </Link>
  );
}

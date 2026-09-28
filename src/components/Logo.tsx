import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  href?: string;
  className?: string;
}

/**
 * Logotype texte — solution provisoire tant que le pack de logos officiel
 * n'a pas été fourni par NMC [TO CONFIRM WITH NMC: logo files].
 * Remplacer par <Image src="/assets/logo/..." /> une fois les fichiers reçus.
 */
export default function Logo({ variant = "dark", href = "/", className = "" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href={href}
      className={`group inline-flex items-baseline gap-1 no-underline ${className}`}
      aria-label="NMC Junior Entreprise — Accueil"
    >
      <span
        className={`font-display text-3xl leading-none tracking-tight ${
          isLight ? "text-white" : "text-black"
        }`}
      >
        NMC
      </span>
      <span
        className="font-display text-3xl leading-none tracking-tight"
        style={{ color: "var(--color-red)" }}
      >
        .
      </span>
      <span
        className={`hidden text-[10px] font-semibold uppercase tracking-[0.28em] sm:inline ${
          isLight ? "text-white/70" : "text-black/60"
        }`}
        style={{ transform: "translateY(-2px)" }}
      >
        Junior Entreprise
      </span>
    </Link>
  );
}

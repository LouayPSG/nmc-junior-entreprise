import Icon from "./Icon";
import { social } from "@/lib/content";

interface SocialLinksProps {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
}

/** Icônes sociales officielles (Instagram, Facebook) + site web */
export default function SocialLinks({ variant = "dark", size = 20, className = "" }: SocialLinksProps) {
  const isLight = variant === "light";
  const base = isLight
    ? "text-white/80 hover:text-white"
    : "text-black/70 hover:text-[color:var(--color-red)]";
  const links = [
    { href: social.instagram, label: "Instagram NMC Junior Entreprise", icon: "instagram" as const },
    { href: social.facebook, label: "Facebook NMC Junior Entreprise", icon: "facebook" as const },
    { href: social.website, label: "Site web nmcje.com", icon: "globe" as const },
  ];
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-current transition-colors ${base}`}
          >
            <Icon name={l.icon} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}

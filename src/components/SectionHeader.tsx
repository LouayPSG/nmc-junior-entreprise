import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

/** En-tête de section standard : eyebrow rouge + titre League Gothic + sous-titre optionnel */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`h2-display max-w-3xl ${dark ? "text-white" : "text-black"}`}>{title}</h2>
      {subtitle ? (
        <p className={`max-w-2xl text-base ${dark ? "text-white/75" : "text-black/75"}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

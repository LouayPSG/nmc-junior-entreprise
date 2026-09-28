import Reveal from "./Reveal";
import { PendingBox } from "./Pending";
import { partners } from "@/lib/content";

/** Mur de logos — cellules uniformes ; logos en attente d'autorisation non affichés */
export default function PartnerWall() {
  const withPartners = partners.categories.filter((c) => c.partners.length > 0);
  if (withPartners.length === 0) {
    return (
      <PendingBox>
        Logos partenaires à venir — chaque logo sera affiché après autorisation écrite
      </PendingBox>
    );
  }
  return (
    <div className="flex flex-col gap-10">
      {withPartners.map((cat) => (
        <div key={cat.id}>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-black/50">
            {cat.name}
          </h3>
          <div className="logo-wall">
            {cat.partners.map((p) => (
              <div key={p.name} className="logo-cell">
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    loading="lazy"
                    className="max-h-12 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-black/60">{p.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

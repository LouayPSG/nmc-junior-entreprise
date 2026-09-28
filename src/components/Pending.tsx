interface PendingNoticeProps {
  dark?: boolean;
  children: string;
  /** Hauteur réduite pour les bandeaux internes */
  compact?: boolean;
}

/**
 * État "contenu à venir" — clairement identifiable, ne simule jamais un contenu réel.
 * Utilisé pour tous les contenus [TO CONFIRM WITH NMC] / [CONTENT TO BE PROVIDED BY NMC].
 */
export function PendingBox({ dark = false, children, compact = false }: PendingNoticeProps) {
  return (
    <div className={dark ? "placeholder-box-dark" : "placeholder-box"} style={compact ? { minHeight: 120 } : undefined}>
      <span>
        <span style={{ color: "var(--color-red)" }}>Contenu à venir</span>
        <br />
        {children}
      </span>
    </div>
  );
}

export function PendingTag({ children }: PendingNoticeProps) {
  return <span className="note-pending">— {children}</span>;
}

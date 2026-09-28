"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";

/**
 * Formulaire de contact (PRD §L) — validation client + honeypot anti-spam.
 * L'envoi passe par Formspree : NEXT_PUBLIC_FORMSPREE_ENDPOINT doit être défini
 * (variable d'environnement, jamais codée en dur). Livraison : nmc.juniorentreprise@gmail.com
 */
type Status = "idle" | "sending" | "success" | "error";

const SUBJECTS = [
  "Devenir partenaire",
  "Demande de service",
  "Rejoindre NMC",
  "Autre",
];

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");

    if (name.length < 2) next.name = "Veuillez indiquer votre nom complet (2 caractères minimum).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "Veuillez saisir une adresse e-mail valide.";
    if (phone && !/^[+0-9 ().-]{6,20}$/.test(phone))
      next.phone = "Format de téléphone invalide.";
    if (!SUBJECTS.includes(subject)) next.subject = "Veuillez choisir un sujet.";
    if (message.length < 10)
      next.message = "Votre message doit contenir au moins 10 caractères.";
    if (!consent) next.consent = "Votre consentement est nécessaire pour traiter la demande.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      // Focus accessible sur le premier champ en erreur
      const first = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center" role="status">
        <span
          className="inline-flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "rgba(162,35,35,0.1)", color: "var(--color-red)" }}
        >
          <Icon name="check" size={28} />
        </span>
        <h3 className="h3-display text-black">Message bien reçu !</h3>
        <p className="max-w-md text-black/70">
          Merci pour votre message. L'équipe de NMC vous répondra dans les meilleurs délais —
          généralement sous 48 à 72 heures.
        </p>
        <button type="button" className="btn btn-secondary mt-2" onClick={() => setStatus("idle")}>
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card flex flex-col gap-5 p-7 md:p-9">
      {status === "error" && (
        <p role="alert" className="rounded-md border border-[color:var(--color-red)] bg-[rgba(162,35,35,0.06)] p-4 text-sm text-black">
          Une erreur est survenue lors de l'envoi. Réessayez ou écrivez-nous directement à
          <a className="link-underline ml-1" href="mailto:nmc.juniorentreprise@gmail.com">
            nmc.juniorentreprise@gmail.com
          </a>
          .
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="field-label">
            Nom complet <span aria-hidden="true" style={{ color: "var(--color-red)" }}>*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            className="field-input"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
          />
          {errors.name && (
            <p id="cf-name-error" className="field-error">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="cf-email" className="field-label">
            E-mail <span aria-hidden="true" style={{ color: "var(--color-red)" }}>*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field-input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
          />
          {errors.email && (
            <p id="cf-email-error" className="field-error">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="cf-phone" className="field-label">Téléphone (optionnel)</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field-input"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "cf-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="cf-phone-error" className="field-error">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="cf-org" className="field-label">Organisation (optionnel)</label>
          <input
            id="cf-org"
            name="organisation"
            type="text"
            autoComplete="organization"
            className="field-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="field-label">
          Sujet <span aria-hidden="true" style={{ color: "var(--color-red)" }}>*</span>
        </label>
        <select
          id="cf-subject"
          name="subject"
          required
          className="field-input"
          defaultValue=""
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "cf-subject-error" : undefined}
        >
          <option value="" disabled>
            Choisir un sujet…
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="cf-subject-error" className="field-error">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className="field-label">
          Message <span aria-hidden="true" style={{ color: "var(--color-red)" }}>*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          className="field-input"
          placeholder="Décrivez votre besoin ou votre question…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
        />
        {errors.message && (
          <p id="cf-message-error" className="field-error">{errors.message}</p>
        )}
      </div>

      {/* Honeypot anti-spam — champ invisible pour les humains */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, overflow: "hidden" }}>
        <label htmlFor="cf-website">Ne pas remplir ce champ</label>
        <input id="cf-website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-black/75">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 shrink-0"
            style={{ accentColor: "var(--color-red)" }}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "cf-consent-error" : undefined}
          />
          <span>
            J'accepte que mes données soient utilisées pour être recontacté(e). Voir notre{" "}
            <a href="/politique-de-confidentialite" className="link-underline">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="cf-consent-error" className="field-error">{errors.consent}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary self-start" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <span
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              aria-hidden="true"
            />
            Envoi en cours…
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}

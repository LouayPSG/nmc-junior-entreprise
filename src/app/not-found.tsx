import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-black px-6 text-center text-white">
      <p className="font-display text-8xl leading-none text-white/15" aria-hidden="true">
        404
      </p>
      <h1 className="h2-display">Page introuvable</h1>
      <p className="max-w-md text-white/70">
        La page que vous cherchez a peut-être été déplacée ou n'existe plus.
      </p>
      <Link href="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </section>
  );
}

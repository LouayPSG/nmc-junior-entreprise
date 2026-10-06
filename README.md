# NMC Junior Entreprise — Site vitrine

Site vitrine statique de **NMC Junior Entreprise** (Neapolis Marketing Consulting — FSEGN Nabeul, Tunisie).

- **Stack** : Next.js 14 (App Router, export statique), React 18, Tailwind CSS, TypeScript
- **Charte** : rouge `#A22323`, noir `#000000`, blanc `#FFFFFF` — League Gothic (titres) + Poppins (texte), auto-hébergées
- **Aucun CMS, aucune base de données** : tout le contenu modifiable vit dans `src/data/*.json`

## Commandes

```bash
npm install        # installation
npm run dev        # développement (http://localhost:3000)
npm run build      # build statique -> dossier out/
npx serve out      # prévisualiser le build
```

## Structure

```
src/
  app/               # pages (Accueil, À propos, Services, Projets, Événements, Équipe, Contact, légal)
  components/        # Navbar, Footer, cartes, formulaire, icônes…
  data/              # ← CONTENU ÉDITORIAL (JSON, éditable sans toucher au code)
  lib/               # typage + accès aux données
public/assets/fonts/ # polices (OFL)
```

## Mettre à jour le contenu

| Fichier | Contenu | Note |
|---|---|---|
| `src/data/site.json` | Coordonnées, navigation, réseaux | Infos officielles Brand Book |
| `src/data/services.json` | Expertises (Research • Strategy • Branding) | Présentation prudente par domaines, validée |
| `src/data/projects.json` | Projets / portfolio | Ajouter une entrée par projet (`featured: true` pour la une) |
| `src/data/events.json` | Événements | Ajouter `{ slug, date, title, description, tag }` |
| `src/data/team.json` | Équipe par pôle | Ajouter `{ name, role, photo, linkedin }` |
| `src/data/partners.json` | Partenaires | Logo + **autorisation écrite requise** avant affichage |
| `src/data/stats.json` | Chiffres clés | Faits confirmés uniquement (fondation 2018, FSEGN, 3 expertises) |

Après chaque modification : `npm run build` puis déploiement (Vercel/Netlify ou hébergeur statique).
Les images vont dans `public/assets/{logo,team,projects,events,partners}/`.

## Formulaire de contact

Les soumissions sont livrées à **nmc.juniorentreprise@gmail.com** via [Formspree](https://formspree.io) :

1. Créer un compte Formspree avec l'e-mail NMC, récupérer l'URL du formulaire
   (`https://formspree.io/f/xxxxxxx`).
2. Définir la variable d'environnement (dashboard Vercel/Netlify, jamais dans le code) :
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```
3. Anti-spam : champ honeypot intégré (Formspree filtre aussi nativement).
   Une CAPTCHA (Cloudflare Turnstile) peut être activée côté Formspree si nécessaire.

Sans cette variable, le formulaire affiche une erreur explicite (aucune perte silencieuse).

## SEO & SEO local

- `sitemap.xml` et `robots.txt` générés au build (base : `site.social.website` = nmcje.com)
- Metadata + Open Graph par page, JSON-LD `Organization` (cohérence NAP)
- À faire côté NMC : Google Business Profile, propriété du domaine nmcje.com

## Statut des contenus

Le site public ne contient plus aucun état « Contenu à venir » ni placeholder. Ne sont publiés que des faits confirmés :
bureau exécutif réel (6 membres), 3 expertises (Research • Strategy • Branding, conformes à la bio Instagram officielle), fondation 2018, FSEGN.

Reste à fournir par NMC : photos du bureau, URLs LinkedIn des membres, endpoint Formspree (formulaire fonctionnel mais erreur explicite tant que la variable n'est pas définie),
logo officiel (logotype texte actuel), projets/événements publiable, domaine nmcje.com.

## Déploiement

Compatible Vercel / Netlify (zéro config) ou tout hébergeur statique :
1. Pousser sur le dépôt Git → build automatique (`npm run build`, sortie `out/`).
2. Pointer nmcje.com vers l'hébergeur (CNAME/A). SSL automatique.
3. Définir `NEXT_PUBLIC_FORMSPREE_ENDPOINT` dans le tableau de bord de l'hébergeur.

---

© NMC Junior Entreprise — FSEGN Nabeul. *Innover ensemble pour transformer les projets en réussites.*

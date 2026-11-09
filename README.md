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

Comportement actuel (aucun compte Formspree configuré) : à la validation, le message est
prérempli dans l'application de messagerie du visiteur (repli `mailto:`) à destination de
**nmc.juniorentreprise@gmail.com**.

Pour passer à une livraison automatique par [Formspree](https://formspree.io) :

1. Créer un compte Formspree avec l'e-mail NMC, créer un formulaire et copier son endpoint
   (`https://formspree.io/f/xxxxxxx`).
2. Définir la variable d'environnement dans le tableau de bord Vercel (jamais dans le code) :
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```
3. Redéployer : dès que la variable est présente au build, le formulaire envoie en HTTP
   au lieu d'ouvrir la messagerie.

Anti-spam : champ honeypot intégré. Une CAPTCHA (Cloudflare Turnstile) peut être activée
côté Formspree si nécessaire.

## SEO & SEO local

- `sitemap.xml` et `robots.txt` générés au build (base : `site.social.website`)
- Metadata + Open Graph par page, JSON-LD `Organization` (cohérence NAP)
- **Domaine** : nmcje.com n'est pas encore acquis. `site.social.website` pointe donc
  temporairement sur `https://nmc-junior-entreprise.vercel.app` (canonical, sitemap, robots,
  JSON-LD, lien « site web »). Le jour de l'acquisition, remplacer cette seule valeur par
  `https://nmcje.com` puis redéployer.
- À faire côté NMC : Google Business Profile, propriété du domaine nmcje.com

## Statut des contenus

Le site public ne contient aucun placeholder. Sont publiés : bureau exécutif réel
(6 membres avec portraits officiels et profils LinkedIn), logos officiels NMC et FSEGN,
3 expertises (Research • Strategy • Branding, conformes à la bio Instagram officielle),
fondation 2018, FSEGN.

Reste à fournir par NMC : projets et événements publiables (avec accord écrit des clients),
endpoint Formspree, domaine définitif.

## Déploiement

Production actuelle : **https://nmc-junior-entreprise.vercel.app** (Vercel, build depuis `main`).

Compatible Vercel / Netlify (zéro config) ou tout hébergeur statique :
1. Pousser sur `main` → build automatique (`npm run build`, sortie `out/`).
2. Pointer nmcje.com vers l'hébergeur (CNAME/A) quand le domaine sera acquis. SSL automatique.
3. Définir `NEXT_PUBLIC_FORMSPREE_ENDPOINT` dans le tableau de bord de l'hébergeur, puis redéployer.

---

© NMC Junior Entreprise — FSEGN Nabeul. *Innover ensemble pour transformer les projets en réussites.*

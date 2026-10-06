import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";
import eventsData from "@/data/events.json";
import teamData from "@/data/team.json";
import partnersData from "@/data/partners.json";
import statsData from "@/data/stats.json";
import {
  ContactInfo,
  EventItem,
  EventsJson,
  NavItem,
  PartnersJson,
  ProjectsJson,
  ServicesJson,
  SiteJson,
  SocialLinks,
  StatsJson,
  TeamJson,
} from "./types";

/* Le contenu éditorial vivant dans src/data/*.json est typé ici une seule fois.
   Pour mettre le site à jour : éditer le JSON concerné, puis redéployer. */

export const site = siteData as SiteJson;
export const services = servicesData as ServicesJson;
export const projects = projectsData as ProjectsJson;
export const events = eventsData as EventsJson;
export const team = teamData as TeamJson;
export const partners = partnersData as PartnersJson;
export const stats = statsData as StatsJson;

export const nav: NavItem[] = site.nav;
export const contact: ContactInfo = site.contact;
export const social: SocialLinks = site.social;

/* Helpers métier ---------------------------------------------------------- */

/** Expertises affichées (domaines confirmés : Research • Strategy • Branding) */
export function getExpertises() {
  return services.expertises;
}

/** Projets mis en avant sur la page d'accueil */
export function getFeaturedProjects(): Project[] {
  return projects.projects.filter((p) => p.featured).slice(0, projects.featuredCount);
}

/** Tous les projets, triés : à la une d'abord, puis par année décroissante */
export function getAllProjects(): Project[] {
  return [...projects.projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return (b.year || "").localeCompare(a.year || "");
  });
}

/** Événements triés du plus récent au plus ancien */
export function getSortedEvents(): EventItem[] {
  return [...events.events].sort((a, b) => b.date.localeCompare(a.date));
}

/** Chiffres clés confirmés uniquement (aucun chiffre inventé) */
export function getConfirmedStats() {
  return stats.stats.filter((s) => s.confirmed);
}

export function hasConfirmedStats() {
  return getConfirmedStats().length > 0;
}

type Project = ProjectsJson["projects"][number];

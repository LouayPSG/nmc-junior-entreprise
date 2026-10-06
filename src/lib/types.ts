export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  addressShort: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  linkedin: string;
  website: string;
}

export interface SiteJson {
  name: string;
  fullName: string;
  baseline: string;
  shortDescription: string;
  founded: number;
  contact: ContactInfo;
  social: SocialLinks;
  nav: NavItem[];
  cta: { header: string; join: string; contact: string };
  legal: { mentions: string; privacy: string };
}

/* Expertises — les 3 domaines confirmés par la bio officielle NMC :
   Research • Strategy • Branding */
export interface Expertise {
  id: string;
  title: string;
  nameFr: string;
  icon: string;
  intro: string;
  description: string;
  what: string;
}

export interface ServicesJson {
  expertises: Expertise[];
}

export interface Project {
  slug: string;
  name: string;
  client: string | null;
  category: string;
  year: string;
  description: string;
  result: string | null;
  cover: string | null;
  link: string | null;
  featured: boolean;
}

export interface ProjectsJson {
  featuredCount: number;
  projects: Project[];
}

export interface EventItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  image: string | null;
}

export interface EventsJson {
  events: EventItem[];
}

/* Équipe — bureau exécutif confirmé + départements */
export interface BoardMember {
  name: string;
  role: string;
  roleNote?: string;
  photo: string | null;
  linkedin: string | null;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  lead: string;
}

export interface TeamJson {
  board: BoardMember[];
  departments: Department[];
}

export interface Partner {
  name: string;
  logo: string | null;
  url: string | null;
}

export interface PartnerCategory {
  id: string;
  name: string;
  partners: Partner[];
}

export interface PartnersJson {
  categories: PartnerCategory[];
}

export interface Stat {
  id: string;
  value: number;
  label: string;
  confirmed: boolean;
}

export interface StatsJson {
  stats: Stat[];
}

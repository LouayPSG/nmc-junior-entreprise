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
  website: string;
}

export interface SiteJson {
  name: string;
  fullName: string;
  baseline: string;
  shortDescription: string;
  contact: ContactInfo;
  social: SocialLinks;
  nav: NavItem[];
  cta: { header: string; join: string; contact: string };
  legal: { mentions: string; privacy: string };
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  confirmed: boolean;
  shortDescription: string;
  valueProposition: string;
  deliverables: string[];
}

export interface ServicesJson {
  status: string;
  notice: string;
  services: Service[];
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
  status: string;
  notice: string;
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
  status: string;
  notice: string;
  events: EventItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string | null;
  linkedin: string | null;
}

export interface TeamPole {
  id: string;
  name: string;
  members: TeamMember[];
}

export interface TeamJson {
  status: string;
  notice: string;
  poles: TeamPole[];
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
  status: string;
  notice: string;
  categories: PartnerCategory[];
}

export interface Stat {
  id: string;
  value: number | null;
  valuePlaceholder: string;
  label: string;
  confirmed: boolean;
}

export interface StatsJson {
  status: string;
  notice: string;
  stats: Stat[];
}

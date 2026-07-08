export interface SiteConfig {
  name: string;
  tagline: string;
  logoText: string;
  footerDesc: string;
}

export interface Hero {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  tag: string;
  headline: string;
  subheadline: string;
  cta: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface About {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface FooterLinks {
  quickLinks: string[];
  address: string;
  address2: string;
  phone: string;
  email: string;
}

export interface SiteData {
  site: SiteConfig;
  hero: Hero;
  heroSlides: HeroSlide[];
  stats: Stat[];
  services: Service[];
  about: About;
  process: ProcessStep[];
  projects: Project[];
  team: TeamMember[];
  whyChoose: WhyChooseItem[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  footerLinks: FooterLinks;
}

declare global {
  interface Window {
    __RUNTIME_CONFIG__?: {
      API_URL?: string;
    };
  }
}

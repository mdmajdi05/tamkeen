/**
 * Data Service — Adapter Pattern
 *
 * Priority chain for API_URL:
 *   1. window.__RUNTIME_CONFIG__.API_URL  (edit /public/config.js, no rebuild)
 *   2. process.env.NEXT_PUBLIC_API_URL    (build-time env, rebuild needed)
 *   3. https://tamkeen-es.com            (hardcoded fallback)
 *
 * Expected backend REST contract:
 *   GET /api/site         → SiteConfig
 *   GET /api/hero         → Hero
 *   GET /api/hero-slides  → HeroSlide[]
 *   GET /api/stats        → Stat[]
 *   GET /api/services     → Service[]
 *   GET /api/about        → About
 *   GET /api/process      → ProcessStep[]
 *   GET /api/projects     → Project[]
 *   GET /api/team         → TeamMember[]
 *   GET /api/why-choose   → WhyChooseItem[]
 *   GET /api/testimonials → Testimonial[]
 *   GET /api/faqs         → FAQ[]
 *   GET /api/footer       → FooterLinks
 *   GET /api/all          → SiteData (full bundle)
 */

import localData from '@/data/content.json';
import type {
  Hero, HeroSlide, Service, Stat, Project, ProcessStep,
  FAQ, About, Testimonial, WhyChooseItem, SiteConfig,
  FooterLinks, TeamMember, SiteData,
} from './types';

function getApiUrl(): string | null {
  if (typeof window !== 'undefined') {
    const runtimeUrl = window.__RUNTIME_CONFIG__?.API_URL;
    if (runtimeUrl && runtimeUrl.trim() !== '') return runtimeUrl.trim();
  }
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (envUrl && envUrl.trim() !== '') return envUrl.trim();
  return 'https://tamkeen-es.com';
}

async function apiFetch<T>(path: string, fallback: T): Promise<T> {
  const base = getApiUrl();
  if (!base) return fallback;
  try {
    const res = await fetch(`${base}${path}`, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export async function getSiteConfig():    Promise<SiteConfig>       { return apiFetch('/api/site',         localData.site); }
export async function getHero():          Promise<Hero>              { return apiFetch('/api/hero',         localData.hero); }
export async function getHeroSlides():    Promise<HeroSlide[]>       { return apiFetch('/api/hero-slides',  localData.heroSlides); }
export async function getStats():         Promise<Stat[]>            { return apiFetch('/api/stats',        localData.stats); }
export async function getServices():      Promise<Service[]>         { return apiFetch('/api/services',     localData.services); }
export async function getAbout():         Promise<About>             { return apiFetch('/api/about',        localData.about); }
export async function getProcess():       Promise<ProcessStep[]>     { return apiFetch('/api/process',      localData.process); }
export async function getProjects():      Promise<Project[]>         { return apiFetch('/api/projects',     localData.projects); }
export async function getTeam():          Promise<TeamMember[]>      { return apiFetch('/api/team',         localData.team); }
export async function getWhyChoose():     Promise<WhyChooseItem[]>   { return apiFetch('/api/why-choose',   localData.whyChoose); }
export async function getTestimonials():  Promise<Testimonial[]>     { return apiFetch('/api/testimonials', localData.testimonials); }
export async function getFAQs():          Promise<FAQ[]>             { return apiFetch('/api/faqs',         localData.faqs); }
export async function getFooterLinks():   Promise<FooterLinks>       { return apiFetch('/api/footer',       localData.footerLinks); }

export async function getAllData(): Promise<SiteData> {
  const base = getApiUrl();
  if (!base) return localData as SiteData;

  const [
    site, hero, heroSlides, stats, services, about,
    process, projects, team, whyChoose, testimonials, faqs, footerLinks,
  ] = await Promise.all([
    getSiteConfig(), getHero(), getHeroSlides(), getStats(), getServices(),
    getAbout(), getProcess(), getProjects(), getTeam(),
    getWhyChoose(), getTestimonials(), getFAQs(), getFooterLinks(),
  ]);

  return {
    site, hero, heroSlides, stats, services, about,
    process, projects, team, whyChoose, testimonials, faqs, footerLinks,
    blogPosts: [],
    productCategories: [],
  };
}

import type { FAQ } from '@/lib/types';

interface JsonLdProps {
  schema: Record<string, unknown>;
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TAMKEEN',
    url: 'https://tamkeen-es.com',
    logo: 'https://tamkeen-es.com/tamkeen-logo.jpeg',
    description:
      'TAMKEEN is a premier engineering solutions provider specializing in power distribution, marine automation, and industrial infrastructure.',
    address: [
      {
        '@type': 'PostalAddress',
        name: 'Muscat Office',
        streetAddress: 'Ghala Industrial Area, Al Ansari Street',
        addressLocality: 'Muscat',
        postalCode: '112',
        addressCountry: 'OM',
      },
      {
        '@type': 'PostalAddress',
        name: 'Duqm Office',
        streetAddress: 'Duqm Industrial Area',
        addressLocality: 'Duqm',
        addressRegion: 'Al Wusta Governorate',
        postalCode: '700',
        addressCountry: 'OM',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+968 9524 8296',
      contactType: 'customer service',
      email: 'contact@tamkeen-es.com',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://twitter.com/tamkeenes',
      'https://linkedin.com/company/tamkeen-es',
    ],
  };

  return <JsonLd schema={schema} />;
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EngineeringContractor'],
    name: 'TAMKEEN',
    image: 'https://tamkeen-es.com/tamkeen-logo.jpeg',
    url: 'https://tamkeen-es.com',
    telephone: '+968 9524 8296',
    email: 'contact@tamkeen-es.com',
    priceRange: '$$',
    areaServed: ['OM', 'IN', 'AE', 'SA', 'QA', 'BH'],
  };

  return <JsonLd schema={schema} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd schema={schema} />;
}

export function FaqSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return <JsonLd schema={schema} />;
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Organization', name: 'TAMKEEN', url: 'https://tamkeen-es.com' },
    url,
    serviceType: name,
    areaServed: ['Worldwide'],
  };

  return <JsonLd schema={schema} />;
}

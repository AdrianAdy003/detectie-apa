import {
  SITE_URL,
  SITE_NAME,
  COMPANY_NAME,
  PHONE_E164,
  CONTACT_EMAIL,
  SERVICE_AREAS,
  COMPANY_ADDRESS_LOCALITY,
  COMPANY_ADDRESS_COUNTRY,
  SERVICE_PRICE_LEI,
} from '../config';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    url: SITE_URL,
    telephone: PHONE_E164,
    email: CONTACT_EMAIL,
    priceRange: `${SERVICE_PRICE_LEI} RON`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_ADDRESS_LOCALITY,
      addressCountry: COMPANY_ADDRESS_COUNTRY,
    },
    areaServed: SERVICE_AREAS.map((zone) => ({
      '@type': 'City',
      name: zone,
    })),
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Detecție geoelectrică a apei subterane',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      telephone: PHONE_E164,
      email: CONTACT_EMAIL,
    },
    areaServed: SERVICE_AREAS.map((zone) => ({
      '@type': 'City',
      name: zone,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RON',
      price: SERVICE_PRICE_LEI,
    },
  };
}

export function breadcrumbListJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function blogPostingJsonLd(opts: {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  path: string;
  author: string;
}) {
  const url = new URL(opts.path, SITE_URL).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: opts.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    url,
    mainEntityOfPage: url,
  };
}

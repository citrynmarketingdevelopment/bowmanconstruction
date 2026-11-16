import type { Metadata } from 'next';

function configuredOrigin(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS origin without a path, credentials, query, or fragment.');
  }
  return url.origin;
}

// Deliberately unset until the client's production domain is chosen.
export const siteUrl = configuredOrigin(process.env.SITE_URL);
export const pagePaths = ['/', '/services', '/work', '/our-story', '/contact'] as const;

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const shareImage = siteUrl ? `${siteUrl}/assets/bowman-construction-share.png` : undefined;
  return {
    title,
    description,
    // Keep domainless review deployments out of search results.
    robots: { index: Boolean(siteUrl), follow: true, 'max-image-preview': 'large' },
    ...(siteUrl ? { alternates: { canonical: new URL(path, siteUrl).href } } : {}),
    openGraph: {
      type: 'website', locale: 'en_US', siteName: 'Bowman Construction', title, description,
      ...(siteUrl ? { url: new URL(path, siteUrl).href } : {}),
      ...(shareImage ? { images: [{ url: shareImage, width: 1200, height: 630, alt: 'Bowman Construction — A Family Name Behind Every Job.' }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, ...(shareImage ? { images: [shareImage] } : {}) },
  };
}

export function structuredData(path: string, title: string, description: string) {
  const absolute = (relative: string) => new URL(relative, siteUrl).href;
  const organization = {
    '@type': 'Organization', name: 'Bowman Construction', legalName: 'Bowman Construction LLC',
    telephone: '+1-661-361-7840',
    description: 'A Family Name Behind Every Job. Grading, Paving, Concrete, And Care For The Surface.',
    ...(siteUrl ? {
      '@id': absolute('/#organization'), url: absolute('/'),
      logo: { '@type': 'ImageObject', url: absolute('/assets/bowman-logo.png') },
      image: absolute('/assets/bowman-construction-share.png'),
    } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Construction Services',
      itemListElement: [
        ['Grading', 'grading'], ['Paving And Concrete', 'paving-concrete'],
        ['Asphalt Maintenance', 'asphalt-maintenance'], ['Seal Coating And Striping', 'seal-coating-striping'],
      ].map(([name, id]) => ({ '@type': 'Offer', itemOffered: {
        '@type': 'Service', name, ...(siteUrl ? { url: absolute(`/services#${id}`) } : {}),
      } })),
    },
  };
  const graph: object[] = [organization, {
    '@type': path === '/contact' ? 'ContactPage' : path === '/our-story' ? 'AboutPage' : path === '/work' ? 'CollectionPage' : 'WebPage',
    name: title, description, inLanguage: 'en-US',
    ...(siteUrl ? { '@id': absolute(path) + '#webpage', url: absolute(path), about: { '@id': absolute('/#organization') } } : {}),
  }];
  if (siteUrl) {
    graph.push({ '@type': 'WebSite', '@id': absolute('/#website'), name: 'Bowman Construction', url: absolute('/') });
    if (path !== '/') graph.push({
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absolute('/') },
        { '@type': 'ListItem', position: 2, name: ({ '/services': 'Services', '/work': 'Our Work', '/our-story': 'Our Story', '/contact': 'Contact' } as Record<string, string>)[path], item: absolute(path) },
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

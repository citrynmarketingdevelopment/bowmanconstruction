import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const configPath = path.join(root, 'seo.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const arg = process.argv.indexOf('--site-url');
if (arg >= 0) {
  if (!process.argv[arg + 1]) throw new Error('Provide The Final HTTPS Website Address After --site-url.');
  const address = new URL(process.argv[arg + 1]);
  if (address.protocol !== 'https:' || address.username || address.password || address.search || address.hash || address.pathname !== '/') {
    throw new Error('Use A Public HTTPS Origin Without A Path, Credentials, Query, Or Fragment.');
  }
  if (address.hostname === 'localhost' || address.hostname.endsWith('.example') || /^\d+\.\d+\.\d+\.\d+$/.test(address.hostname)) {
    throw new Error('Use The Confirmed Public Website Domain.');
  }
  config.siteUrl = address.origin;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
}

const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const absolute = relative => config.siteUrl ? new URL(relative, config.siteUrl + '/').href : relative;
const services = [
  ['Grading', 'Site Grading And Base Preparation. A Solid Foundation For The Work Ahead.', 'grading'],
  ['Paving And Concrete', 'Asphalt Paving And Concrete Work, Planned Around Your Property And Finished With Care.', 'paving-concrete'],
  ['Asphalt Maintenance', 'Care And Maintenance Suited To The Condition Of Your Asphalt Surface.', 'asphalt-maintenance'],
  ['Seal Coating And Striping', 'Seal Coating And Clear Pavement Markings For Existing Paved Surfaces.', 'seal-coating-striping']
];
const pages = [
  { file: 'index.html', route: '', title: 'Bowman Construction | Grading, Asphalt Paving & Concrete', description: 'Bowman Construction Offers Grading, Asphalt Paving, Concrete, Asphalt Maintenance, Seal Coating, And Striping. Call (661) 361-7840 To Discuss Your Project.', type: 'WebPage' },
  { file: 'work.html', route: 'work.html', title: 'Asphalt Paving Project Photos | Bowman Construction', description: 'Explore Bowman Construction’s Asphalt Paving, Compaction, And Hand-Finishing Photos. See The Family Crew And Equipment At Work.', type: 'CollectionPage' },
  { file: 'contact.html', route: 'contact.html', title: 'Contact Bowman Construction | Start Your Project', description: 'Contact Bowman Construction About Grading, Paving, Concrete, Asphalt Maintenance, Seal Coating, Or Striping. Share Your Project Details Or Call (661) 361-7840.', type: 'ContactPage' },
  { file: 'services.html', route: 'services.html', title: 'Grading, Paving, Concrete & Asphalt Services | Bowman Construction', description: 'Explore Bowman Construction Services: Grading, Asphalt Paving And Concrete, Asphalt Maintenance, Seal Coating, And Striping.', type: 'WebPage', label: 'Services' },
  { file: 'our-story.html', route: 'our-story.html', title: 'Our Family Story | Bowman Construction', description: 'Meet The Family Operation Behind Bowman Construction, Built On A Father’s 35 Years In Asphalt Construction And Carried Forward With His Sons.', type: 'AboutPage', label: 'Our Story' }
];
for (const page of pages) {
  const organization = {
    '@type': 'Organization', name: config.businessName, legalName: config.legalName,
    telephone: config.telephone,
    description: config.shareTitle + ' ' + config.shareDescription,
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Construction Services',
      itemListElement: services.map(([name, description, id]) => ({
        '@type': 'Offer', itemOffered: {
          '@type': 'Service', name, description,
          ...(config.siteUrl ? { url: absolute('services.html#' + id) } : {})
        }
      }))
    },
    ...(config.siteUrl ? {
      '@id': absolute('#organization'), url: absolute(''),
      logo: { '@type': 'ImageObject', url: absolute('assets/bowman-logo.png') },
      image: absolute(config.shareImage)
    } : {})
  };
  const graph = [organization, {
    '@type': page.type, name: page.title, description: page.description, inLanguage: 'en-US',
    ...(config.siteUrl ? { '@id': absolute(page.route) + '#webpage', url: absolute(page.route), about: { '@id': absolute('#organization') } } : {})
  }];
  if (config.siteUrl) {
    graph.push({ '@type': 'WebSite', '@id': absolute('#website'), name: config.businessName, url: absolute('') });
    if (page.route) graph.push({
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absolute('') },
        { '@type': 'ListItem', position: 2, name: page.label || (page.type === 'ContactPage' ? 'Contact' : 'Our Work'), item: absolute(page.route) }
      ]
    });
  }
  const tags = [
    `<title>${escape(page.title)}</title>`,
    `<meta name="description" content="${escape(page.description)}">`,
    '<meta name="robots" content="index, follow, max-image-preview:large">',
    '<meta name="theme-color" content="#182C3C">',
    ...(config.siteUrl ? [`<link rel="canonical" href="${escape(absolute(page.route))}">`, `<meta property="og:url" content="${escape(absolute(page.route))}">`] : ['<!-- The Public Domain, Canonical URLs, And Sitemap Are Pending. -->']),
    `<meta property="og:site_name" content="${escape(config.businessName)}">`,
    '<meta property="og:type" content="website">',
    '<meta property="og:locale" content="en_US">',
    `<meta property="og:title" content="${escape(config.shareTitle)}">`,
    `<meta property="og:description" content="${escape(config.shareDescription)}">`,
    `<meta property="og:image" content="${escape(absolute(config.shareImage))}">`,
    '<meta property="og:image:type" content="image/png">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    `<meta property="og:image:alt" content="Bowman Construction Logo. ${escape(config.shareTitle)} ${escape(config.shareDescription)}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escape(config.shareTitle)}">`,
    `<meta name="twitter:description" content="${escape(config.shareDescription)}">`,
    `<meta name="twitter:image" content="${escape(absolute(config.shareImage))}">`,
    `<meta name="twitter:image:alt" content="Bowman Construction Logo. ${escape(config.shareTitle)} ${escape(config.shareDescription)}">`,
    '<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">',
    '<link rel="icon" type="image/png" sizes="48x48" href="assets/favicon-48.png">',
    '<link rel="shortcut icon" href="favicon.ico">',
    '<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">',
    '<link rel="manifest" href="site.webmanifest">',
    '<link rel="preload" as="font" type="font/ttf" href="assets/fonts/barlow-condensed-600.ttf" crossorigin>',
    '<script type="application/ld+json">\n' + JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replaceAll('<', '\\u003c') + '\n  </script>'
  ];
  const filename = path.join(root, page.file);
  let html = fs.readFileSync(filename, 'utf8');
  if (/<!-- SEO:START -->/.test(html)) html = html.replace(/  <!-- SEO:START -->[\s\S]*?  <!-- SEO:END -->/, '  <!-- SEO:START -->\n  ' + tags.join('\n  ') + '\n  <!-- SEO:END -->');
  else {
    html = html.replace(/^  (?:<title>.*?<\/title>|<meta (?:name="(?:description|theme-color|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>|<link rel="(?:icon|shortcut icon|apple-touch-icon|manifest)"[^>]*>)\n/gm, '');
    html = html.replace('  <meta name="viewport" content="width=device-width, initial-scale=1">', '  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <!-- SEO:START -->\n  ' + tags.join('\n  ') + '\n  <!-- SEO:END -->');
  }
  fs.writeFileSync(filename, html);
}
let robots = 'User-agent: *\nAllow: /\n';
if (config.siteUrl) {
  const urls = pages.map(page => `  <url><loc>${escape(absolute(page.route))}</loc></url>`).join('\n');
  fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  robots += `\nSitemap: ${absolute('sitemap.xml')}\n`;
}
fs.writeFileSync(path.join(root, 'robots.txt'), robots);
console.log(config.siteUrl ? 'Prepared Production SEO For ' + config.siteUrl : 'Prepared On-Page SEO. Public Domain, Canonical URLs, Absolute Share Links, And Sitemap Are Pending.');

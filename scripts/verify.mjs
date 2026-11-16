import assert from 'node:assert/strict';
// Run against a started production build: npm run verify -- http://localhost:3000
const base = new URL(process.argv[2] || 'http://localhost:3000');
const paths = ['/', '/services', '/work', '/our-story', '/contact'];
const assets = new Set(), titles = new Set(), indexing = new Set();
for (const path of paths) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: HTTP status`);
  const html = await response.text();
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: server-rendered H1`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title?.includes('Bowman Construction'), `${path}: title`); titles.add(title);
  assert.match(html, /<meta name="description" content="[^"]+"/, `${path}: description`);
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  assert(robots, `${path}: indexing metadata`); indexing.add(robots.includes('noindex') ? 'preview' : 'production');
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || 'null');
  assert.equal(graph?.['@context'], 'https://schema.org', `${path}: structured data`);
  assert(graph['@graph'].some(item => item['@type'] === 'Organization'), `${path}: organization schema`);
  for (const [, asset] of html.matchAll(/(?:src|href|poster|data-src)="(\/assets\/[^"?]+)"/g)) assets.add(asset);
  for (const [, href] of html.matchAll(/href="(\/[^"?]*)"/g)) {
    if (href.startsWith('/assets/') || href.startsWith('/_next/') || /\.(?:ico|webmanifest)$/.test(href)) continue;
    const [target, hash] = href.split('#');
    assert(paths.includes(target || path), `${path}: internal link ${href}`);
    if (hash && (!target || target === path) && !(path === '/work' && ['all', 'paving', 'compaction', 'crew', 'equipment'].includes(hash))) assert(html.includes(`id="${hash}"`), `${path}: anchor ${href}`);
  }
  if (path === '/work') assert.equal([...html.matchAll(/class="[^"]*\bgallery-card\b[^"]*"/g)].length, 59, 'server-rendered gallery');
  if (path === '/contact') assert.match(html, /Online Inquiries Are Coming Soon/);
  console.log(`PASS ${path}: server content, metadata, structured data and internal links`);
}
assert.equal(titles.size, paths.length, 'distinct titles');assert.equal(indexing.size, 1, 'consistent indexing');
await Promise.all([...assets].map(async asset => assert.equal((await fetch(new URL(asset, base), { method: 'HEAD' })).status, 200, `asset ${asset}`)));
for (const [legacy, destination] of [['index', '/'], ...paths.slice(1).map(path => [path.slice(1), path])]) {
  const response = await fetch(new URL(`/${legacy}.html?source=legacy`, base), { redirect: 'manual' });
  assert.equal(response.status, 308, `${legacy}.html: permanent redirect`);
  const location = new URL(response.headers.get('location'), base);
  assert.equal(location.pathname, destination);assert.equal(location.search, '?source=legacy');
}
assert.equal((await fetch(new URL('/missing-page', base))).status, 404);
const robots = await (await fetch(new URL('/robots.txt', base))).text();
const sitemap = await (await fetch(new URL('/sitemap.xml', base))).text();
if (indexing.has('preview')) { assert.match(robots, /Disallow: \//);assert.doesNotMatch(sitemap, /<loc>/); }
else { assert.match(robots, /Sitemap: https:\/\//);assert.equal([...sitemap.matchAll(/<loc>/g)].length, paths.length); }
console.log(`PASS ${assets.size} assets, legacy redirects, 404, robots and sitemap (${[...indexing][0]})`);

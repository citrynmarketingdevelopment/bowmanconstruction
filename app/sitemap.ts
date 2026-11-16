import type { MetadataRoute } from 'next';
import { pagePaths, siteUrl } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? pagePaths.map(path => ({ url: new URL(path, siteUrl).href })) : [];
}

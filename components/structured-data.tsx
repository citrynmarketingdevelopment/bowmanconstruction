import { structuredData } from '../lib/seo';

export default function StructuredData({ path, title, description }: { path: string; title: string; description: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(path, title, description)).replace(/</g, '\\u003c') }} />;
}

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '../lib/seo';
import './globals.css';

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  applicationName: 'Bowman Construction',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon-48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
};

export const viewport: Viewport = { themeColor: '#182C3C' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...['services', 'work', 'our-story', 'contact'].map(page => ({
        source: `/${page}.html`, destination: `/${page}`, permanent: true,
      })),
    ];
  },
};
export default nextConfig;

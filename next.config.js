const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

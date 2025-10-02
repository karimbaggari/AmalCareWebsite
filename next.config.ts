import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https' as const,
        hostname: 'www.amal-care.de',
      },
      {
        protocol: 'https' as const,
        hostname: 'alamalhealthcare.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);

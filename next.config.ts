import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // Other Next.js config options here
};

export default withNextIntl(nextConfig);

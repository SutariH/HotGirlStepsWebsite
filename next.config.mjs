/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  metadata: {
    metadataBase: new URL('http://localhost:3000'),
  },
  // Add proper shutdown handling
  onShutdown: () => {
    console.log('Cleaning up before shutdown...');
    // Clean up any open connections or resources
    process.on('SIGTERM', () => {
      console.log('SIGTERM received. Shutting down gracefully...');
      process.exit(0);
    });

    process.on('SIGINT', () => {
      console.log('SIGINT received. Shutting down gracefully...');
      process.exit(0);
    });

    process.on('uncaughtException', (err) => {
      console.error('Uncaught Exception:', err);
      process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
      process.exit(1);
    });
  },
  // Add proper webpack configuration for development
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Development-specific webpack config
      config.cache = false;
    }
    return config;
  }
};

export default nextConfig; 
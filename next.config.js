/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        framework: {
          test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
          name: 'framework',
          chunks: 'all',
          priority: 40,
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          name: 'lib',
          chunks: 'all',
          priority: 30,
        },
      },
    };
    return config;
  },
}

module.exports = nextConfig 
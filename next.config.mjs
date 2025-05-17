/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Enable SWC minification (default in newer Next.js)
  swcMinify: true,

  // ✅ Ensure pages directory inside `src` is handled
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // ✅ (Optional) Enable future features — if you're using edge SSR or streaming
  experimental: {
    appDir: false // Ensure legacy `pages` routing is used
  }
};

export default nextConfig;

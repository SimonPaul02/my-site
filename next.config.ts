import type { NextConfig } from 'next';
const config: NextConfig = { images: { formats: ['image/webp'], qualities: [75, 85] }, trailingSlash: true };
export default config;

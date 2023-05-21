/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  compress: false,
  env: {
    googleApiKey: 'AIzaSyB5fITwebnKaPmHI-rAGpPNPG7xhIXwbSA',
    api: process.env.API_URL || 'http://127.0.0.1:3005/api',
    production: process.env.PRODUCTION,
  },
  images: {
    domains: [
      'assets.jdlandscaping.net',
      'staging-jdlandscaping-assets.s3.amazonaws.com',
      'sd-assets.jdlandscaping.net',
    ],
  },
};

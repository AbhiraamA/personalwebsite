/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'personalwebsite';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'a2bef6ba-ec2c-4592-96eb-30819429ced7',
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
};

module.exports = nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    // Find existing file-loader rule for SVGs
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => any } }) =>
        rule.test instanceof RegExp && rule.test.test('.svg'),
    );
    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // Apply file-loader for SVGs with ?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
          }, // Exclude ?url from svgr
          use: ['@svgr/webpack'],
        },
      );
      fileLoaderRule.exclude = /\.svg$/i; // Exclude SVGs from the default file-loader
    }
    return config; // Ensure config is returned
  },
};

export default nextConfig;

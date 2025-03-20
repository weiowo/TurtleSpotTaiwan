import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#AAF5FA',
          500: '#00CAD7',
        },
        secondary: {
          100: '#E5EEF0',
          300: '#50535E',
          500: '#161616',
        },
      },
    },
  },
  plugins: [],
};
export default config;

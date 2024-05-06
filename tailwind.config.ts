const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        dancing: ['var(--font-dancing-script)'],
        oswald: ['var(--font-oswald)'],
      },
      colors: {
        'black-100': '#2B2C35',
        'primary-blue': {
          DEFAULT: '#2B59FF',
          100: '#F5F8FF',
        },
        'secondary-orange': '#f79761',
        'light-white': {
          DEFAULT: 'rgba(59,60,152,0.03)',
          100: 'rgba(59,60,152,0.02)',
        },
        grey: '#747A88',
        'bg-green': '3D5145',
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
});

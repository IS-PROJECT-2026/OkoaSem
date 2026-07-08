/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#06060b',
          gold: '#d4af6a',
          'gold-bright': '#e8c87a',
          teal: '#2dd4bf',
          violet: '#8b5cf6',
          rose: '#f472b6',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 106, 0.25)',
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}

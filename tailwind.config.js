/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Source Code Pro', 'monospace'],
        header: ['Oswald', 'sans-serif'],
        norse: ['Norse-Bold', 'sans-serif'],
      },
      colors: {
        footer: '#2e323f',
        primary: '#3b4050',
        accent: '#a59678',
      },
      fontSize: {
        'heading-1': 'clamp(1.75rem, 4.75vw, 4rem)',
        'heading-2': '3.75rem',
        'heading-3': '1.5rem',
        body: '1.125rem',
      },
      spacing: {
        section: '5em',
      },
    },
  },
  plugins: [],
};

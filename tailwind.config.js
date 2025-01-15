export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Source Code Pro', 'monospace'],
        header: ['Oswald', 'sans-serif'],
      },
      colors: {
        footer: '#2e323f',
        primary: '#3b4050',
        accent: '#a59678',
      },
    },
  },
  plugins: [],
};

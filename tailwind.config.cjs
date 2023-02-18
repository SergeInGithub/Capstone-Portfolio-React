/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // create a custom color palette
      colors: {
        primary: '#29292B',
        secondary: '#424242',
        tertiary: '#0DF5F5',
      },
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kt: {
          black: "#121212",
          yellow: "#F3BA2F",
        },
      },
    },
  },
  plugins: [],
};

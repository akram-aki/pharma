/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008080",
        secondary: "#004C4C",
        heavy1: "#006666",
        light1: "#66B2B2",
        light2: "#B2D8D8",
      },
    },
  },
  plugins: [],
};

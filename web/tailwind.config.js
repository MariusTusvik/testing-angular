/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primairy: "#f5f5f7",
        variant: "#e6e5e6",
        blue: "#007bff",
        gray: "#a6a7a8",
        graydark: "#e4e4e6",
        black: "#000000",
      },
      scale: {
        '175': '1.75',
        '200': '2',
        '225': '2.25',
        '250': '2.5',
        '275': '2.75',
        '300': '3',
        '325': '3.25',
        '350': '3.5',
        '375': '3.75',
        '400': '4',
      }
    },
  },
  plugins: [],
};

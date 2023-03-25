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
    },
  },
  plugins: [],
};

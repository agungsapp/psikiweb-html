/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["user/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#DCE9E2",
      // pupus: "#639E6C",
      pupus: "#9ED3B7",
      basic: "#00856F",
    },
    extend: {
      fontFamily: {
        dm: ["Dm Sans"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

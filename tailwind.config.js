/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "csc-A": "#fbfaf7",
        "csc-B": "#333333",
        "csc-C": "#464f66",
        "csc-D": "#6F6F6F",
        "csc-E": "#52624c",
        "csc-F": "#c8cee3"
      },
      fontFamily: {
        "csf-A": "'Poppins', sans-serif",
        "csf-B": "'Lobster Two', cursive"
      }
    },
  },
  plugins: [],
}
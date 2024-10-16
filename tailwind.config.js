/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Onest" : ["Onest", "sans-serif"],
      },
      colors: {
        primary: "#09090B",
        secondary: "#71717A",
        button: "#F26922",
      }

    },
  },
  plugins: [],
}


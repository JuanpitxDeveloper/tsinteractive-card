/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
          Orange: 	"#fb7413",
          LightGrey: "#959eac",
          MediumGrey: "#7c8798",
          DarkBlue: "#1f262e",
          VeryDarkBlue: "#121417",
      }
    },
  plugins: [],
}
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 50: "#f4efe5" },
        gray: { 200: "#e5e8ea", 300: "#e8ddce", 900: "#1c160c" },
        lime: { 800: "#a08249" },
        teal: { 600: "#009963" },
        white: { a700: "#ffffff" },
      },
      boxShadow: {},
      fontFamily: { spacegrotesk: "Space Grotesk", plusjakartasans: "Plus Jakarta Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

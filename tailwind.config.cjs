/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#EEF2FF",
        "gray-50": "#E4E8F5",
        "gray-100": "#D1D4E0",
        "gray-500": "#666666",
        "primary-100": "#ffc8ff",
        "primary-300": "#b967c3",
        "primary-400": "#691a75",
        "primary-500": "#90419b",
        "primary-800": "#150517",
        "primary-900": "#0a030c",
        "secondary-400": "#ffe400",
        "secondary-500": "#e9d000",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

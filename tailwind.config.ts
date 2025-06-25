// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "hammer-hit": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(15deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "60%": { transform: "rotate(5deg)" },
          "80%": { transform: "rotate(-2deg)" },
        },
      },
      animation: {
        "hammer-hit": "hammer-hit 1s ease-in-out",
      },
    },
  },
  plugins: [require("tw-animate-css"), require("@tailwindcss/forms")],
};

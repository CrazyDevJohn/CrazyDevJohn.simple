/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-wite": "#fff",
        "primary-gray": "#353535",
        "light-black": "#333",
      },
      animation: {
        blink: "blink .5s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "40%, 80%": { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};

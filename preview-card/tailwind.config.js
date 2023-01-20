/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/src/assets/images/image-product-mobile.jpg')",
      },
      colors: {
        cream: "hsl(30, 38%, 92%)",
        darkcyan: "hsl(158, 36%, 37%)",
        darkBlue: "hsl(212, 21%, 14%)",
        darkGrayichBlue: "hsl(212, 21%, 14%)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};

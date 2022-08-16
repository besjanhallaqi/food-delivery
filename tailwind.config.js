/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E60FF",
        primaryLight: "#F3F4FF",
        secondary: "#FD6D22",
        secondaryLight: "#FFF3ED",
        neutralBlack: "#2B2B43",
        neutralGray: "#83859C",
        lightGray: "#EDEEF2",
        borderGray: "#C7C8D2",
      },
    },
  },
  plugins: [],
};

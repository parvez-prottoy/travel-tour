/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
        yesteryear: "'Yesteryear', cursive",
      },
      colors: {
        primary: "#1D231F",
        info: "#4DA528",
        light: "#B4B4B4",
      },
    },
  },
  plugins: [],
};

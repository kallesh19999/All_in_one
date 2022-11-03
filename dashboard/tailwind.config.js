/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#33CCCC",
        secondary: "#009999",
        komiser: {
          100: "#F5FDFD",
          200: "#CCF2F2",
          300: "#99E5E5",
          400: "#66D9D9",
          500: "#33CCCC",
        },
        warning: {
          100: "#FFF5DA",
          600: "#EDC16B",
        },
        error: {
          100: "#FFE8E8",
          600: "#DE5E5E",
          700: "#ae4242",
          900: "#362033",
        },
        success: {
          100: "#E1FFE3",
          600: "#56BA5B",
        },
        black: {
          100: "#F4F9F9",
          200: "#CFD7D7",
          300: "#95A3A3",
          400: "#697372",
          900: "#0C1717",
        },
      },
      fontFamily: {
        sans: [
          "Noto Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

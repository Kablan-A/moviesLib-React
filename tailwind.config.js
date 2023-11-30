/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        logoShadow: "rgba(238, 244, 212, 1) 0px 4px 12px",
        btnShadow:
          "rgba(238, 244, 212, 1) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
      padding: {
        navHero: "7vw",
      },
      backgroundColor: {
        mainBlack: "#030303",
        secondaryBlack: "#0d0d0e",
      },
    },
  },
  plugins: [],
};

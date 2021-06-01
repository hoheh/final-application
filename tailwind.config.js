module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontSize: {
      xs: ".75rem",
      s: ".8rem",
      sm: ".875rem",
      md: ".9rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "bgc-modal": "rgba(0, 0, 0, 0.65)",
        link: "#3D70B2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

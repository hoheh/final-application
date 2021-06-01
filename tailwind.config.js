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
      boxShadow: {
        "big-inner-shadow": "inset 0px -1px 25px 12px rgba(34, 60, 80, 0.09)",
      },
      colors: {
        "bgc-modal": "rgba(0, 0, 0, 0.65)",
        link: "#3D70B2",
        "dirty-green": "#2a9d8f",
        "hover-dirty-green": "#3eb8a9",
        "hover-dirty-green-50": "rgba(62, 184, 169, 0.07)",
        "gray-10": "#f7f7f7",
      },
      fontSize: {
        "pre-xl": ["1.12rem", "1.75rem"],
      },
      letterSpacing: {
        "wider-more": "0.07rem",
      },
      spacing: {
        76: "19rem",
        92: "23rem",
        104: "26rem",
        140: "35rem",
        152: "38rem",
      },
      margin: {
        1.2: "0.38rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

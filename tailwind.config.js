module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      softGray: "#F6FAFD",
    }),
    extend: {},
    fontFamily: {
      inter: ["Inter", "system-ui"],
    },
  },
  variants: {
    extend: {
      zIndex: ["hover", "active"],
      borderWidth: ["last"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};

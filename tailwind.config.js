module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      softGray: "#F6FAFD",
    }),
    extend: {},
  },
  variants: {
    extend: {
      zIndex: ["hover", "active"],
      borderWidth: ["last"],
    },
  },
  plugins: [],
};

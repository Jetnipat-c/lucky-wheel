module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#121821",
          secondary: "#171C28",
        },
      },
    },
  },
  /* eslint-disable global-require */
  plugins: [require("@tailwindcss/line-clamp")],
};

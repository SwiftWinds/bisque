/* jshint esversion: 11 */

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {},
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;

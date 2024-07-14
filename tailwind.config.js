/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        skyBlue: {
          1: "#EFF5FF",
          2: "#BEE2FD",
        },
        denim: {
          1: "#022959",
        },
        gray: {
          1: "#9699AA",
          2: "#D6D9E6",
          3: "#F8F9FF",
        },
        purple: {
          1: "#483EFF",
        },
      },
    },
  },
  plugins: [],
};

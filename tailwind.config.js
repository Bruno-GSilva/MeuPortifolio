/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    fontSize: {
      big: "48px",
      smallbig: "26px",
    },
    colors: {
      Black: "#02010A",
      OxfordBlue: "#04052E",
      Federalblue: "#140152",
      Navyblue: "#22007C",
      Russianviolet: "#3A015C",
      Palatinate: "#4F0147",
      white: "#FFFFFF",
      "Darkpurple-25": "#35012C",
      "Darkpurple-50": "#290025",
      "Darkpurple-100": "#11001C",
    },
    fontFamily: {
      poppins: ['"Poppins"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        fundo: "url('/src/images/background.png')",
      },
      // spacing: {
      //   "8xl": "96rem",
      //   "9xl": "128rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
    },
  },
  plugins: [],
}

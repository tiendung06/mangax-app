/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1DC071",
        primary20: "#4ACD8D",
        primary40: "#77D9AA",
        primary60: "#A5E6C6",
        primary80: "#D2F2E3",
        secondary: "#6F49FD",
        secondary20: "#8C6DFD",
        secondary40: "#A992FE",
        secondary60: "#C5B6FE",
        secondary80: "#E2DBFF",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        "icon-color": "#A2A2A8",
        white: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        grayf3: "#f3f3f3",
        strock: "#F1F1F3",
        primaryExtra: "#F1FBF7",
        lite: "#FCFCFD",
        error: "#EB5757",
        redSoft: "#F9E3E3",
        darkbg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

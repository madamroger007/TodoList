/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "cursive"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          ".btn-color-gray":{
            "background-color":"#D9D9D9"
          },
          ".text-title": {
            "color": "#000000",
            "fill": "#000000",
            
          },
          ".btn-twitter:hover": {
            "background-color": "#1C96E1",
            "border-color": "#1C96E1",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          ".btn-color-gray":{
            "background-color":"#383636"
          },
          ".text-title": {
            "color": "#FAF9F9",
            "fill": "#FAF9F9",
          },
          ".btn-twitter:hover": {
            "background-color": "#1C96E1",
            "border-color": "#1C96E1",
          },
        },
      },
    ],
  },
};

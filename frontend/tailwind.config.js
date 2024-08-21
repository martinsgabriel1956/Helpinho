/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        light: {
          neutral: {
            50: "#f6f6f6",
            100: "#e7e7e7",
            200: "#d1d1d1",
            300: "#b0b0b0",
            400: "#888888",
            500: "#6d6d6d",
            600: "#5d5d5d",
            700: "#4f4f4f",
            800: "#454545",
            900: "#3d3d3d",
            950: "#0a0a0a",
          },
          primary: {
            50: "#FFF0F3",
            100: "#FFE2E7",
            200: "#FFC8D6",
            300: "#FF9CB4",
            400: "#FF648E",
            500: "#FF2E6B",
            600: "#F40B59",
            700: "#CE024C",
            800: "#AC0546",
            900: "#930843",
            950: "#530020",
          },
          secondary: {
            50: "#FEFBE8",
            100: "#FDF5C4",
            200: "#FDE88B",
            300: "#FBD549",
            400: "#F8BE17",
            500: "#F4AE0B",
            600: "#C87E06",
            700: "#9F5909",
            800: "#84460F",
            900: "#703A13",
            950: "#411D07",
          },
          success: {
            50: "#F0FDF3",
            100: "#DDFBE4",
            200: "#BDF5CB",
            300: "#89ECA4",
            400: "#4EDA74",
            500: "#2DD55B",
            600: "#1A9F3E",
            700: "#187D34",
            800: "#18632E",
            900: "#165127",
            950: "#062D12",
          },
          warning: {
            50: "#FFFFEA",
            100: "#FFFCC5",
            200: "#FFF985",
            300: "#FFEF46",
            400: "#FFE11B",
            500: "#FFC409",
            600: "#E29600",
            700: "#BB6A02",
            800: "#985208",
            900: "#7C430B",
            950: "#482300",
          },
          danger: {
            50: "#FFF0F1",
            100: "#FFDDE0",
            200: "#FFC1C6",
            300: "#FF959D",
            400: "#FF5966",
            500: "#FF2637",
            600: "#FC0619",
            700: "#C5000F",
            800: "#AF0512",
            900: "#900C16",
            950: "#500006",
          },
        },
        dark: {
          neutral: {
            50: "#0A0A0A",
            100: "#3D3D3D",
            200: "#454545",
            300: "#4F4F4F",
            400: "#5D5D5D",
            500: "#6D6D6D",
            600: "#888888",
            700: "#B0B0B0",
            800: "#D1D1D1",
            900: "#E7E7E7",
            950: "#F6F6F6",
          },
          primary: {
            50: "#530020",
            100: "#930843",
            200: "#AC0546",
            300: "#CE024C",
            400: "#F40B59",
            500: "#FF2E6B",
            600: "#FF648E",
            700: "#FF9CB4",
            800: "#FFC8D6",
            900: "#FFE2E7",
            950: "#FFF0F3",
          },
          secondary: {
            50: "#411D07",
            100: "#703A13",
            200: "#84460F",
            300: "#9F5909",
            400: "#C87E06",
            500: "#F4AE0B",
            600: "#F8BE17",
            700: "#FBD549",
            800: "#FDE88B",
            900: "#FDF5C4",
            950: "#FEFBE8",
          },
          success: {
            50: "#062D12",
            100: "#165127",
            200: "#18632E",
            300: "#187D34",
            400: "#1A9F3E",
            500: "#2DD55B",
            600: "#4EDA74",
            700: "#89ECA4",
            800: "#BDF5CB",
            900: "#DDFBE4",
            950: "#F0FDF3",
          },
          warning: {
            50: "#482300",
            100: "#7C430B",
            200: "#985208",
            300: "#BB6A02",
            400: "#E29600",
            500: "#FFC409",
            600: "#FFE11B",
            700: "#FFEF46",
            800: "#FFF985",
            900: "#FFFCC5",
            950: "#FFFFEA",
          },
        },
      },
    },
  },
  plugins: [],
};

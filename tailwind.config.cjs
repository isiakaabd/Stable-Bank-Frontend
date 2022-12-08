/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e0e4e",
        secondary: "#ecb963",
        tertiary: "#ee9a40",
        white: '#ffffff',
        white_variant: '#cccccc',
        red: '#D10000',
        green: '#00A300'
      }
    },
    fontFamily: {
      body: ["Quicksand", "sans-serif"],
      mono: ["mono"]
    },
  },
  plugins: [],
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ],
};

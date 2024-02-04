/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"],
      },
      colors: {
        textWhite: " #ffffff",
        blueColor: " #36348E",
        primaryColor: "#B7D8EF",
        yellowColor: "#FFC53A",
        lightBlueColor: "#CDD4FB",
        formBlueColor: "#ffffff7f",
        formBgColor: "#ffffff66",
        grayColor: "#646464",
        blackColor: "#000000",
        bgLightColor: "#f9f9fc",
        orangeColor: "#f66a1d",
      },
    },
  },
  plugins: [],
};

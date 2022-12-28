/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        "light-gray": "#F7FAFB",
        fb: "#3b5998",
        insta: "#c32aa3",
        linkedin: "#0a66c2",
        yt: "#ff0000",
        twitter: "#1da1f2",
        "dark-red": "#C5181F",
        "dark-blue": "#1781B8",
      },
      fontFamily: {
        radwave: "radwave",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      screens: {
        "3xl": "1537px",
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};

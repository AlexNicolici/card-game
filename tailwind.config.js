/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-background": "url(./assets/game-background.jpg)",
        "fireCard-background": "url(./assets/fire-class.jpg)",
        "iceCard-background": "url(./assets/ice-class.jpg)",
        "thunderCard-background": "url(./assets/thunder-class2.jpg)",
      },
    },
  },
  plugins: [],
};

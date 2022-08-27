/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url(../img/norway.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'miami': "url('../img/miami.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'norway': "url('../img/norway.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#CC2D4A',
        seconday: '#8FA206',
        terciary: '#61AEC9',

        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        green: colors.emerald,
        violet: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        purple: colors.purple,
        indigo: colors.indigo,
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'Roboto'],
        Roboto: ['Roboto', 'Montserrat']
      }
    },
  },
  plugins: [],
}

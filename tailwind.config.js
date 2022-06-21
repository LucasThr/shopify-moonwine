/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.js',
    './layouts/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#3A3A3A',
          medium: '#C3C3C3'
        },
        red: {
          DEFAULT: '#CC2F37'
        },
        green: {
          light: '#D9D7B1'
        }
      },
      maxWidth: {
        content: '1440px'
      },
      fontFamily: {
        serif: ['Eugusto', 'serif']
      },
      boxShadow: {
        grid: '0 0 0 1px #D9D7B1'
      }
    },
  },
  plugins: [],
}

//  npx tailwindcss -o ./assets/custom-tailwind.css -w -m
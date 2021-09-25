module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './build/index.html'],

    options: {
      safelist: ['bg-work', 'bg-play', 'bg-study', 'bg-exercise', 'bg-social', 'bg-self-care']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'profile': 'hsl(246, 80%, 60%)',
      'work': 'hsl(15, 100%, 70%)',
      'play': 'hsl(195, 74%, 62%)',
      'study': 'hsl(348, 100%, 68%)',
      'exercise': 'hsl(145, 58%, 55%)',
      'social': 'hsl(264, 64%, 52%)',
      'self-care': 'hsl(43, 84%, 65%)',
      'background': 'hsl(226, 43%, 10%)',
      'card-background': 'hsl(235, 46%, 20%)',
    }),
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      },
      colors: {
        'desat-blue': 'hsl(235, 45%, 61%)'
      }
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      cursor: ['hover'],
      brightness: ['hover']
    },
  },
  plugins: [],
}

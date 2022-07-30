const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        'noto-sans': ['Noto Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('prettier-plugin-tailwindcss')],
}

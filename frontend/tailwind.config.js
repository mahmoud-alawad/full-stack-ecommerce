/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      container: ({theme}) => ({
        center: true,
        padding: theme('custom.spacing.gutter'),
      }),
      custom: {
        spacing: {
          gutter: '0.75rem',
        },
      },
      colors:{
        primary: '#57bea1'
      }
    },
  },
  plugins: [],
}

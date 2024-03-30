/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'editorwrapper': '230px 1fr',
      }
    },
  },
  plugins: [],
}
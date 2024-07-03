/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        healthcare: {
          "primary": "#278BFF",
          'primary-focus': '#4506cb',
          'primary-content': '#f0f5fb',
          "secondary": "#71CEF8",
          'secondary-focus': '#4506cb',
          'secondary-content': '#f0f5fb',
          "accent": "#37cdbe",
          "neutral": "#234",
          "base-100": "#F0F5FB",
        },
      },
      "light", "dark", "cupcake", "wireframe"],
  },
}


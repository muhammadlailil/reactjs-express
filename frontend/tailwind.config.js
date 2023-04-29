/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-pattern': "url('/auth-image.png')",
        'auth-m-pattern': "url('/auth-banner-m.png')",
      },
      fontFamily: {
        'roboto-bold': ['var(--roboto-bold)'],
        'roboto-regular': ['var(--roboto-regular)'],
        'roboto': ['var(--roboto)'],
      },
      boxShadow: {
        'button': '2.05909px 6.86364px 25.758px rgba(0, 0, 0, 0.05)',
        'red-button': '4.49835px 4.49835px 11.6957px rgba(235, 39, 48, 0.4)',
        'blue-button': '2.05909px 6.86364px 25.758px rgba(0, 0, 0, 0.1)'
      },
      colors: {
        'dark-label': '#3F3B31'
      }
    },
  },
  plugins: [],
}

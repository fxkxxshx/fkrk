/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fkrk: {
          purple: '#A11DF1',
          gray: '#D7D7D7',
        },
      },
      fontFamily: {
        notoSansJp: ['Noto Sans JP'],
        ibmPlexSans: ['IBM Plex Sans'],
      },
    },
  },
  plugins: [],
};

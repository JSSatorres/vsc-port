/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'dark-background': 'rgba(30, 34, 39, 0.979)',
        darker: '#21242A',
        darkest: '#1B1E22',
        darke: '#1E2126',
        'dark-terminal': '#181A1E',
        grey: '#2D2F32',
        midnight: '#2A2D34',
      },
    },
    backgroundImage: {
      'dark-gradient': 'linear-gradient(to right, #0009,   #0008,#0009)',
    },
    // animation: {
    //   'bounce-slow': 'bounce 0.3s linear',
    // },
  },
  plugins: [],
}

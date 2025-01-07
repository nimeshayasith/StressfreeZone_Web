export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 2s infinite', // Adjust duration as needed
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0.6, backgroundColor: 'rgba(34,197,94,0.5)' }, // Soft green
          '50%': { opacity: 1, backgroundColor: 'rgba(34,197,94,0.8)' }, // Highlighted green
        },
      },
    },
  },
  plugins: [],
};


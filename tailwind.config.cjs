/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        pitch: {
          900: '#06150d',
          800: '#082014',
        },
        neon: {
          lime: '#7CFF4E',
          green: '#37f26e',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,255,78,0.3), 0 0 24px -4px rgba(124,255,78,0.4)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px rgba(109, 40, 217, 0.6)', // A purple/violet glow
        'card-hover-glow': '0 0 6px rgba(109, 40, 217, 0.8)', // A stronger glow for hover
      },
      keyframes: { // Define my custom keyframes here
        'bounce-x': { // animation name
          '0%, 100%': { // at the start and end of the animation
            transform: 'translateX(0)', // No horizontal displacement
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)', // Fast out, slow in
          },
          '50%': { // In the middle of the animation
            transform: 'translateX(25%)', // Move 25% of the width to the right
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)', //slow out, fast in
          },
        },
    },
    animation: { // Link your keyframes to an animation utility
        'bounce-horizontal': 'bounce-x 1s infinite', // use 'bounce-horizontal' class for this animation
        'bounce-pingpong': 'bounce-x 1s infinite alternate', // Bounces right, then left repeatedly
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
}
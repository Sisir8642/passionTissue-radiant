// tailwind.config.js
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         'slide-left': 'slideLeft 12s linear infinite',
//       },
//       keyframes: {
//         slideLeft: {
//           '0%': { transform: 'translateX(100%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // tailwind.config.js
    extend: {
      animation: {
        "bounce-test": "bounceTest 2s ease-in-out infinite",
      },
      keyframes: {
        bounceTest: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50px)" },
        },
      },
    },
  },
  plugins: [],
};

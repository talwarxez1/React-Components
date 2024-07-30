module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        
          'playwrite': ["Playwrite AT", 'cursive'],
        
      },
      keyframes: {
        animation: {
          '0%, 100%': { top: '0' },
          '20%': { top: '0' },
          '25%': { top: '-50px' },
          '45%': { top: '-50px' },
          '50%': { top: '-100px' },
        },
      },
      animation: {
        'custom-animation': 'animation 10s ease infinite',
      },
    },
  },
  plugins: [],
};



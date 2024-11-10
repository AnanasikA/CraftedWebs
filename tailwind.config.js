module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 2s ease-in-out',
          'slide-in': 'slideIn 1.5s ease-in-out',
          'gradient-bg': 'gradientBg 10s ease infinite',
          'underline-right': 'underline-right 0.3s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideIn: {
            '0%': { transform: 'translateY(20px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          gradientBg: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          'underline-right': {
          '0%': { transform: 'scaleX(0)', 'transform-origin': 'right' },
          '100%': { transform: 'scaleX(1)', 'transform-origin': 'left' },
        },
        },
        backgroundSize: {
          '400%': '400%',
        },
        screens: {
          'mobile': '820px',
        },
      },
    },
    plugins: [],
  }
  
  
  
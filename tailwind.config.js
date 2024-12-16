/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        carousel: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(var(--translate))' }
        },
        glow: {
          '0%': { 
            borderColor: 'rgba(255,0,0,0.8)',
            boxShadow: '0 0 60px 0px rgba(255,0,0,0.5)'
          },
          '16.67%': { 
            borderColor: 'rgba(255,165,0,0.8)',
            boxShadow: '0 0 60px 0px rgba(255,165,0,0.5)'
          },
          '33.33%': {
            borderColor: 'rgba(255,255,0,0.8)',
            boxShadow: '0 0 60px 0px rgba(255,255,0,0.5)'
          },
          '50%': {
            borderColor: 'rgba(0,255,0,0.8)',
            boxShadow: '0 0 60px 0px rgba(0,255,0,0.5)'
          },
          '66.67%': {
            borderColor: 'rgba(0,0,255,0.8)',
            boxShadow: '0 0 60px 0px rgba(0,0,255,0.5)'
          },
          '83.33%': {
            borderColor: 'rgba(238,130,238,0.8)',
            boxShadow: '0 0 60px 0px rgba(238,130,238,0.5)'
          },
          '100%': {
            borderColor: 'rgba(255,0,0,0.8)',
            boxShadow: '0 0 60px 0px rgba(255,0,0,0.5)'
          }
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        rainbowGlow: {
          '0%, 100%': {
            background: 'rgba(255, 0, 0, 0.2)',
            boxShadow: '0 0 60px 0px rgba(255, 0, 0, 0.8)'
          },
          '16.67%': {
            background: 'rgba(255, 165, 0, 0.2)',
            boxShadow: '0 0 60px 0px rgba(255, 165, 0, 0.8)'
          },
          '33.33%': {
            background: 'rgba(255, 255, 0, 0.2)',
            boxShadow: '0 0 60px 0px rgba(255, 255, 0, 0.8)'
          },
          '50%': {
            background: 'rgba(0, 255, 0, 0.2)',
            boxShadow: '0 0 60px 0px rgba(0, 255, 0, 0.8)'
          },
          '66.67%': {
            background: 'rgba(0, 0, 255, 0.2)',
            boxShadow: '0 0 60px 0px rgba(0, 0, 255, 0.8)'
          },
          '83.33%': {
            background: 'rgba(238, 130, 238, 0.2)',
            boxShadow: '0 0 60px 0px rgba(238, 130, 238, 0.8)'
          }
        },
        amberGlow: {
          '0%, 100%': {
            background: 'rgba(218, 165, 32, 0.2)',
            boxShadow: '0 0 60px 0px rgba(218, 165, 32, 0.8)'
          },
          '50%': {
            background: 'rgba(218, 165, 32, 0.3)',
            boxShadow: '0 0 80px 0px rgba(218, 165, 32, 0.9)'
          }
        },
        blueGlow: {
          '0%, 100%': {
            background: 'rgba(3, 117, 255, 0.2)',
            boxShadow: '0 0 60px 0px rgba(3, 117, 255, 0.8)'
          },
          '50%': {
            background: 'rgba(3, 117, 255, 0.3)',
            boxShadow: '0 0 80px 0px rgba(3, 117, 255, 0.9)'
          }
        }
      },
      animation: {
        'carousel': 'carousel 30s linear infinite',
        'glow': 'glow 5s linear infinite',
        'rotate': 'rotate 10s linear infinite',
        'rainbow-glow': 'rainbowGlow 5s linear infinite',
        'amber-glow': 'amberGlow 5s linear infinite',
        'blue-glow': 'blueGlow 5s linear infinite'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'ping-slow': 'ping 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 10s linear infinite',
        'circuit-flow': 'circuit-flow 4s linear infinite',
        'hologram': 'hologram 5s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite',
        'cyber-spin': 'cyber-spin 4s linear infinite',
        'data-stream': 'data-stream 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'circuit-flow': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        hologram: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
            color: '#00ffff'
          },
          '50%': { 
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
            color: '#ffffff'
          },
        },
        'cyber-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'data-stream': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'matrix-pattern': 'linear-gradient(45deg, #00ffff 25%, transparent 25%), linear-gradient(-45deg, #00ffff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #00ffff 75%), linear-gradient(-45deg, transparent 75%, #00ffff 75%)',
        'cyber-grid': 'radial-gradient(circle at 1px 1px, #00ffff 1px, transparent 0)',
        'hologram-bg': 'linear-gradient(45deg, #00ffff 0%, #0080ff 25%, #8000ff 50%, #ff0080 75%, #00ffff 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        'neon-blue': '0 0 5px #0080ff, 0 0 10px #0080ff, 0 0 15px #0080ff, 0 0 20px #0080ff',
        'neon-purple': '0 0 5px #8000ff, 0 0 10px #8000ff, 0 0 15px #8000ff, 0 0 20px #8000ff',
        'matrix-glow': '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

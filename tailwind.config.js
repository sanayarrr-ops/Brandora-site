export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: '#EAE6FF',
        peach: '#FFE9E3',
        sky: '#E6F4FF',
        lilac: '#C5B4FF',
        softPurple: '#A993F8',
        softPink: '#F6C6D8',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(80, 67, 140, 0.08)',
        glow: '0 20px 50px rgba(169, 147, 248, 0.35)',
      },
      backgroundImage: {
        'pastel-gradient': 'linear-gradient(135deg, #EAE6FF 0%, #FFE9E3 50%, #E6F4FF 100%)',
        'lilac-gradient': 'linear-gradient(135deg, #c7b5ff 0%, #f5c8da 55%, #c4e9ff 100%)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(25px,-20px) scale(1.07)' },
          '66%': { transform: 'translate(-18px,15px) scale(0.96)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        blob: 'blob 12s ease-in-out infinite',
        'blob-slow': 'blob 18s ease-in-out infinite',
        shimmer: 'shimmer 12s ease infinite',
      },
    },
  },
  plugins: [],
};

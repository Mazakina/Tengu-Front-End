import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        pop: 'pop .5s ease-in ',
      },
      keyframes: {
        pop: {
          '0%,60%,100%': { transform: 'scale(1.0)' },
          '30%': { transform: 'scale(1.01)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'c-gray-bg': '#1F1F1F',
        'c-gray-button': '#303030',
        'c-gray-300': '#DBDBDB',
        'c-gray-400': '#AFAFAF',
        'c-gray-600': '#333333',
        'c-gray-800': '#2E2E2E',
        'c-pastel-blue': '#ADD8FF',
        'c-pastel-green': '#1BFFBA',
        'c-pastel-orange': '#FFD4AD',
        'c-pastel-red': '#FFADAD',
        'c-pastel-purple': '#F0E1FE',
        'c-pastel-lilac': '#FDADFF',
        'c-positive': '#00FF75',
        'c-negative': '#FF3434',
        'c-base-blue': '#31B5FF',
        'c-sub-text': '#6A6A6A',
      },
      opacity: {
        'o-1/5': '0.2',
      },
    },
  },
  plugins: [],
}
export default config

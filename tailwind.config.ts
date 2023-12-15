import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      colors: {
        product: {
          main: '#00875F',
          light: '#00b37e',
        },
        base: {
          background: '#121214',
          elements: '#202024',
          text: '#c4c4cc',
          title: '#e1e1e6',
        },
        gradient: {
          green: '#1ea483',
          purple: '#7465d4',
        },
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "myBlue1": "#ADD7F6",
        "myBlue2": "#87BFFF",
        "myBlue3": "#3F8EFC",
        "myBlue4": "#2667FF",
        "myBlue5": "#3B28CC",
      },
    },
  },
  plugins: [],
}
export default config

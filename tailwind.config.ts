import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", 'node_modules/preline/dist/*.js'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontSize: {
        '1em': '1em'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('preline/plugin'),],
} satisfies Config;

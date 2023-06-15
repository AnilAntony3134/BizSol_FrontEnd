import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        background: 'rgb(0 0 0)',
        secondary: '#353535'
      }
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626'
      }
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;

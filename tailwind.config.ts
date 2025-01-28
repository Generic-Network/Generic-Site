import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Standard-Schriftart auf Helvetica setzen
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'below-700': {max: "700px"},
        'below-1000': { max: '1000px' },
        'below-800': { max: '800px'},
        'below-400': { max: '400px' },
         // Breakpoint für <400px
      },
    },
  },
  plugins: [],
} satisfies Config;

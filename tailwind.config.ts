import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          250: "var(--neutral-250)",
          300: "var(--neutral-300)",
          500: "var(--neutral-500)",
          750: "var(--neutral-750)",
          800: "var(--neutral-800)",
          850: "var(--neutral-850)",
          900: "var(--neutral-900)",
          "900-80": "var(--neutral-900-80)",
        },
        gradient: {
          homepage: "rgba(35, 35, 37, 0.90)",
        },
        fgcolor: {
          neutral: {
            secondary: "var(--color-fgcolor-neutral-secondary)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

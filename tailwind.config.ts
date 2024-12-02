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
          200: "var(--neutral-200)",
          500: "var(--neutral-500)",
          800: "var(--neutral-800)",
        },
        grayscale: {
          900: "var(--grayscale-900)",
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

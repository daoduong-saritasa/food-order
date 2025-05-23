import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      borderRadius: {
        sm: "calc(var(--radius) - 2px)",
        DEFAULT: "var(--radius)",
        md: "calc(var(--radius) + 2px)",
        lg: "calc(var(--radius) + 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        // Typography.
        ".text-h1": {
          fontSize: theme("fontSize.6xl"),
          fontWeight: theme("fontWeight.extrabold"),
          lineHeight: "70px",
        },
        ".text-h2": {
          fontSize: theme("fontSize.5xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "60px",
        },
        ".text-h3": {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "50px",
        },
        ".text-h4": {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "40px",
        },
        ".text-h5": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "35px",
        },
        ".text-h6": {
          fontSize: theme("fontSize.1xl"),
          fontWeight: theme("fontWeight.semibold"),
        },
      });
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
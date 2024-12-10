/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        "pale-primary": "rgb(var(--pale-primary))",
        "dark-primary": "rgb(var(--dark-primary))",
        background: "rgb(var(--background))",
        neutral: "rgb(var(--neutral))",
        subtitle: "rgb(var(--subtitle))",
        foreground: "rgb(var(--foreground))",
        "primary-foreground": "rgb(var(--primary-foreground))",
        "secondary-foreground": "rgb(var(--secondary-foreground))",
        "accent-foreground": "rgb(var(--accent-foreground))",
        accent: "rgb(var(--accent))",
      },
      screens: {
        tablet: '800px'
      }
    },
  },
  plugins: [],
};

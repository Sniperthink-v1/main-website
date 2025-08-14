/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './lib/**/*.{js,ts,jsx,tsx,mdx}',
      './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          sora: ['Sora', 'sans-serif'],
        },
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          // Custom colors for ProductsSection
          'product1-start': '#bbdec1',
          'product1-mid': '#6c916f',
          'product1-end': '#2e4931',
          'product2-start': 'rgba(225,169,64,0.2)',
          'product2-mid': 'rgba(225,169,64,0.5)',
          'product2-end': 'rgba(225,169,64,0.8)',
          'product1-inner-start': '#4c6d4f',
          'product1-inner-end': '#6c916f',
          'product2-inner-start': 'rgba(225,169,64,0.6)',
          'product2-inner-end': 'rgba(225,169,64,0.8)',
          'accent-yellow': '#e1a940',
          'accent-yellow-hover': '#c89636',
          'feature-list-start': 'rgba(26,98,98,0.4)',
          'feature-list-end': 'rgba(189,238,244,0.4)',
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
          // Custom border radius
          '60px': '60px',
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "caret-blink": {
            "0%,70%,100%": { opacity: "1" },
            "20%,50%": { opacity: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "caret-blink": "caret-blink 1.25s ease-out infinite",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
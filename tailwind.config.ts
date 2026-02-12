import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        brand: "#64B5B5",
        obsidian: "#0F172A",
        subtle: "#64748B",
        canvas: "#FAFAFA",
        danger: "#EF4444",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        "warm-amber": "var(--warm-amber)",
        "warm-off-white": "var(--warm-off-white)",
        "warm-amber-10": "var(--warm-amber-10)",
        "warm-amber-20": "var(--warm-amber-20)",
        "warm-amber-30": "var(--warm-amber-30)",
        "warm-amber-light": "var(--warm-amber-light)",
        "warm-charcoal": "var(--warm-charcoal)",
        "warm-brown": "var(--warm-brown)",
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        popIn: {
          to: {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
        fadeSlideIn: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "text-glint": {
          "0%, 100%": {
            "background-position": "-100% 0",
          },
          "50%": {
            "background-position": "100% 0",
          },
        },
        "pulse-line": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(200%)",
          },
        },
        "typing-dot-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateY(-4px)",
            opacity: "1",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        popIn: "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        fadeSlideIn: "fadeSlideIn 0.8s ease-out 0.1s both",
        "text-glint": "text-glint 4s ease-in-out infinite",
        "pulse-line": "pulse-line 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "typing-dot-bounce": "typing-dot-bounce 1s infinite ease-in-out",
        "border-beam": "border-beam var(--duration) infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#050711", // Extremely dark black-blue for background
          100: "#0A0C19", // Very dark navy for shadows and borders
          200: "rgba(17, 25, 40, 0.95)", // Translucent dark background
          300: "rgba(255, 255, 255, 0.1)", // Light translucent white for subtle highlights
        },
        white: {
          DEFAULT: "#EDEFF5", // Soft white for text and high contrast
          100: "#F0F2F7", // Softer light gray for contrast
        },
        blue: {
          DEFAULT: "#0A2A5E", // Very dark blue for primary elements
          100: "#122F72", // Dark navy blue for interactive elements
          200: "#1C4D9F", // Deep vibrant blue for hover states and highlights
          300: "#376BBF", // Brighter blue for accents
          400: "#608DFF", // Lighter blue for background accents
        },
        cyan: {
          DEFAULT: "#049CB1", // Muted cyan for accents
          100: "#0CCED8", // Brighter cyan for highlights
          200: "#67F8FF", // Light cyan for softer elements
        },
        teal: {
          DEFAULT: "#139D84", // Dark cyan-green for subtle accents
          100: "#1DCBAF", // Brighter cyan-green for buttons and actions
        },
        gradientBlue: {
          DEFAULT: "linear-gradient(90deg, #0A2A5E 0%, #376BBF 100%)", // Darker gradient for a bold look
        },
        background: "#050711", // Very dark navy-black background
        foreground: "#E3E7EE", // Softer light gray for readability
        primary: {
          DEFAULT: "#0A2A5E", // Very dark blue for primary buttons
          foreground: "#FFFFFF", // Bright white text on primary buttons
        },
        secondary: {
          DEFAULT: "#16212D", // Dark gray-blue for secondary elements
          foreground: "#BAC2D2", // Softer light text for secondary elements
        },
        destructive: {
          DEFAULT: "#FF3333", // Bold red for destructive actions
          foreground: "#FFFFFF", // White text on destructive buttons
        },
        muted: {
          DEFAULT: "#3A3F4D", // Dark muted gray for less important content
          foreground: "#D1D6DE", // Light muted text
        },
        accent: {
          DEFAULT: "#049CB1", // Cyan accent for emphasis
          foreground: "#C9F9FF", // Light text on cyan backgrounds
        },
        popover: {
          DEFAULT: "#131A26", // Dark popover background
          foreground: "#E0E6ED", // Light text for popovers
        },
        card: {
          DEFAULT: "#1A1F2A", // Very dark blue for card backgrounds
          foreground: "#E1E7EF", // Light text on cards
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;

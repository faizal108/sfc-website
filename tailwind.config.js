/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF100", // yellow
        secondary: "#0005A3", //blue
        black: "#231E20", //black
        danger: "#DC2626",
        success: "#16A34A",
        dark: "#111827",
        light: "#F9FAFB",
        videoDark: "#2F2B2C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem", // e.g., h-128
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      screens: {
        "4xl": "1920px", // Large TVs and extra large monitors
        "3xl": "1600px", // Desktops with high resolutions
        "2xl": "1440px", // Standard large desktop
        xl: "1280px", // Medium desktop/laptops
        lg: "1024px", // Small laptops/tablets
        md: "960px", // Custom medium size (your request)
        nd: "700px", // Custom for mid-size tablets
        sm: "640px", // Small tablets and large phones
        xs: "480px", // Phones
        xxs: "360px", // Small phones
        xxxs: "320px", // Too small phones
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-30px)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateX(300px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeSlideOut: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(300px)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 0.4s ease-out",
        fadeOutUp: "fadeOutUp 0.4s ease-in",
        fadeSlideIn: "fadeSlideIn 0.5s ease-out",
        fadeSlideOut: "fadeSlideOut 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
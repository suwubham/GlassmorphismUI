/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // primary: "#8B5CF6",
        primary: "#3d3854",
        // secondary: "#EC4899",
        secondary: "#554d75",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-delay": "float 10s 1s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-delay-slow": "float 14s 2s ease-in-out infinite",
        // "pulse-glow": "pulseGlow 2s ease-in-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        // pulseGlow: {
        //   "0%, 100%": { boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)" },
        //   "50%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" },
        // },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

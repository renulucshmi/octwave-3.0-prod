export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        p: "#8b5cf6",
        p2: "#a78bfa",
        p3: "#c4b5fd",
        cy: "#22d3ee",
        pk: "#ec4899",
        bg: "#02020e",
        bg2: "#06060f",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
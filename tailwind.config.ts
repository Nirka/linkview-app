import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D3A",
        linkblue: "#126BFF",
        cyan: "#00C2FF",
        ice: "#E6F1FF"
      }
    }
  },
  plugins: []
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: { extend: { colors: { acid: "#c6ff3d", violet: "#8b6cff" } } },
  plugins: [],
};

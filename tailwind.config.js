/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["selector", "[data-theme*='dark']"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure all files are scanned
    theme: {
      extend: {},
    },
    plugins: [],
  };

// tailwind.config.js
module.exports = {
    darkMode: "class", // Enable class-based dark mode
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS files in src
      "./public/index.html" // Include your HTML file
    ],
    theme: {
      extend: {
        colors: {
          // Custom color palette
          primary: {
            DEFAULT: "#2563eb",
            hover: "#1d4ed8"
          },
          secondary: "#6b7280",
          success: "#10b981",
          warning: "#f59e0b",
          danger: "#ef4444",
          light: "#f9fafb",
          dark: "#111827"
        },
        // You can extend other theme properties here
      },
    },
    plugins: [],
  }
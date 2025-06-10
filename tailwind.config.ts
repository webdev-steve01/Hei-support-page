/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // These paths are important! They tell Tailwind where to scan for your utility classes.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If you're using the App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If you have a 'src' directory
  ],
  theme: {
    extend: {
      // This is where you can customize your screen sizes, colors, fonts, etc.
      screens: {
        sm: "640px",
        md: "768px",
        xm: "650px", // Custom 'xm' breakpoint - adjust as needed
        lg: "1024px", // Default 'lg' - customize this as needed, e.g., '1100px'
        xl: "1280px",
        "2xl": "1536px",
        // Example of a custom breakpoint:
        "my-custom-breakpoint": "900px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

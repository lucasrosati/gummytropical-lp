import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFF8F1",
          text: "#7A5C45",
          headline: "#FF9F40",
          cta: "#BD1C2A",
          "cta-text": "#FFEDC7",
          orange: "#FFA200",
          pink: "#FE008E",
          "orange-light": "#FF9F40",
          "orange-border": "#FF3E00",
          "orange-heading": "#FF6C00",
          countdown: "#FFECDC",
          field: "#F5F5F5",
          footer: "#D9D9D9",
          "footer-text": "#898989",
          "card-border": "#FF9F40",
        },
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
      boxShadow: {
        ambient: "0px 20px 40px rgba(57,56,54,0.06)",
        form: "10.45px 4.18px 62.71px rgba(0,0,0,0.1)",
        countdown: "0px 8px 24px rgba(255,94,101,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

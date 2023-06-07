/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      axiforma: ["Axiforma", "system-ui"],
      anglecia: ["Anglecia Pro Display", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      redhat: ["Red Hat Text", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        backImg: "url('/background.png')",
        backVpn: "url('/choosePlan.png')",
        backMoon: "url('/moon.png')",
        backMoonFooter: "url('/moonFooter.png')",
        backSubscribe: "url('/subscribeBack.png')",
        back404: "url('/404Page.png')",
        back404Man: "url('/404Man.png')",
        backComingSoon: "url('/ComingSoonBg.svg')",
        backComingSoonBgMobile: "url('/ComingSoonBgMobile.svg')",
        backGridLine: "url('/gridLine.svg')",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': `#403F3D`,
        'light': `#E1D4C9`,
        'accent': `#B0907A`,
        'container': `#665F55`,
      },
      fontSize: {
        'heading-1-md':['72px','105%'],
        'heading-2-md':['60px','125%'],
        'heading-3':['24px','125%'],
        'heading-1':['42px','125%'],
        'heading-2':['32px','125%'],
        'link-butt':['16px','150%'],
        'caption':['10px','140%']
      },
      fontWeight: {
        'heading-1': '600',
        'heading-2': '600',
        'heading-3': '600',
      }
    },
  },
  plugins: [],
};
export default config;

import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                'primaryColor': '#c6957a',
                'mainColor': '#864d25',
                'secondaryColor': '#849f67',
                'darkColor': '#47372a',
                'lightColor': '#6a4834',
                'backgroundColor': '#f7f7f7',
                'whiteColor': '#ffffff',
                'blackColor': '#000000',
            }
        },
    },
    plugins: [],
};
export default config;

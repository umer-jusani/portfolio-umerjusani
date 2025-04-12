import { createTheme, responsiveFontSizes } from "@mui/material";
import { Inter, Open_Sans } from "next/font/google";

const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });
const roboto = Open_Sans({ subsets: ["latin"], variable: "--font-roboto" });

let theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                }
            }
        }

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            dialogScreen: 720,
            normal: 1000,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: `'Livvic', ${roboto.style.fontFamily}, ${poppins.style.fontFamily}`,
        Regular: 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 900,
        fontSize: 14, // Default font size
        sizes: {
            100: "13px",
            sm: "14px",
            md: "16px",
            lg: "17px",
            lg: "18px",
            xl: "20px",
        },
    },
    palette: {
        mode: "light",
        primary: {
            "main": "#ffc107",
        },
        text: {
            primary: "#77777b",
            secondary: "#dadadc",
            tertiary: "#fff",
            black: "#000"
        },
        background: {
            default: "#1e1e28",
            paper: "#12121a",
            light: "#242430",
            dark: "#20202a",
            card: "#2b2b36"
        },
        divider: "#2b2b36"
    },
});

theme = responsiveFontSizes(theme);

export default theme;

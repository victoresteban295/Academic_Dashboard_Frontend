import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Cabin } from "next/font/google"

const cabin = Cabin({
    weight: ['400', '700'],
    subsets: ['latin']
})

let theme = createTheme({
    breakpoints: {
        values: {
            fold: 0,
            mobile: 350,
            tablet: 600,
            desktop: 900,
        },
    },
    palette: {
        primary: {
            main: '#78a1bb',
            light: '#e3f3ff',
            secondary: "#06d6a0"
        },
        secondary: {
            main: '#403d39',
        },
        background: {
            paper: '#f8f9fa',
            default: '#f8f9fa'
        },
        text: {
            primary: '#000'
        },
        widget: {
            background: '#fff'
        },
        error: {
            main: '#ff5858',
            light: '#ffe9e9'
        }
    },
    typography: {
        fontFamily: cabin.style.fontFamily
    }
});

theme = responsiveFontSizes(theme);

export default theme;

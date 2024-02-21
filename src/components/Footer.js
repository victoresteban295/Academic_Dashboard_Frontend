import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
    let currentYear = new Date().getFullYear().toString();
    return (
        <Box
            sx={{
                mt: 4,
                mb: 2,
            }}
        >
            <Typography align="center" variant="subtitle1">
                © {currentYear} Victor Esteban. All Right Reserved 
            </Typography>
            <Stack
                direction= 'row'
                divider = <Divider orientation="vertical" flexItem />
                spacing={2}
                justifyContent='center'
                sx={{
                    my: {
                        fold: 0,
                        mobile: 0,
                        tablet: 1,
                        desktop: 1,
                    },
                }}
            >
                <Link 
                    href="https://vesteban.dev" 
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{
                        textDecoration: 'none',
                        color: '#000'
                    }}
                >
                    <Typography
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        Portfolio
                    </Typography>
                </Link>
                <Link 
                    href="https://github.com/victoresteban295" 
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{
                        textDecoration: 'none',
                        color: '#000'
                    }}
                >
                    <Typography
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        GitHub
                    </Typography>
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/victor-esteban295/" 
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{
                        textDecoration: 'none',
                        color: '#000'
                    }}
                >
                    <Typography
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        LinkedIn
                    </Typography>
                </Link>
            </Stack>
            <Stack
                direction="row"
                justifyContent='center'
                alignItems="center"
                spacing={0.5}
            >
                <Typography align="center" variant="subtitle1">
                    Icons by 
                </Typography>
                <Link 
                    href="https://icons8.com/" 
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{
                        textDecoration: 'underline',
                        color: '#000'
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        Icons8
                    </Typography>
                </Link>
            </Stack>
        </Box>
    )
}

export default Footer;

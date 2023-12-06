import Footer from '@/components/Footer';
import { AppBar, Box, Toolbar } from "@mui/material"

const loginLayout = ({ children }) => {
    return (
        <html lang="eng">
            <body>
                <Box sx={{position:'sticky', top:'0px', zIndex:'999',}}>
                    <AppBar position='sticky'>
                        <Toolbar disableGutters>
                        </Toolbar>
                    </AppBar>
                </Box>
                {children}
                <Footer />
            </body>
        </html>
    )
};

export default loginLayout;

import ThemeRegistry from '@/theme/ThemeRegistry'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry options={{ key: 'mui'}}>
                    <Navbar />
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    )
}

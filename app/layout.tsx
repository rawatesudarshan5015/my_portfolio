import './globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
export const metadata = {
  title: 'Sudarshan Rawate | Portfolio',
  description: 'My developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

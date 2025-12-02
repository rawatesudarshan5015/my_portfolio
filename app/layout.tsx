import './globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Sudarshan Rawate | Portfolio',
  description: 'My developer portfolio',
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <Navbar />

          {/* Same width as navbar */}
          <main className="max-w-6xl mx-auto px-6 pt-16">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  )
}

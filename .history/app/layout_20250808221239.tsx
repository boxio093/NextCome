// app/layout.tsx
import './globals.css'
import { Poppins, Nunito_Sans } from 'next/font/google'

// Poppins for headings
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['600', '700', '800'],
})

// Nunito Sans for body text
const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'My Landing Page',
  description: 'Built with Next.js, Poppins & Nunito Sans fonts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply both fonts */}
      <body className={`${poppins.variable} ${nunito.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}

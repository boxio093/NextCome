// app/layout.tsx
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

// Load fonts with CSS variables for Tailwind
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['600', '700', '800'],
})

export const metadata = {
  title: 'My Landing Page',
  description: 'Built with Next.js, Poppins & Inter fonts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply both font variables */}
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

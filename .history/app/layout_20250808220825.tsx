// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // avoids layout shift
})

export const metadata = {
  title: 'My Landing Page',
  description: 'Built with Next.js and Inter font',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

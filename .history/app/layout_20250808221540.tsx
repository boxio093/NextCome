import './globals.css'

export const metadata = {
  title: 'My Landing Page',
  description: 'Using native system fonts from Google and Apple',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-system">{children}</body>
    </html>
  )
}

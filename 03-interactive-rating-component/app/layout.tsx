import './globals.css'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata = {
  title: 'Interactive Rating Component',
  description: 'Frontend Mentor Challenge made by Juan Pablo Sinkachkuk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-dark-veryDark grid place-content-center ${overpass.className}`}>{children}</body>
    </html>
  )
}

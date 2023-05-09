import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'

const hanken = Hanken_Grotesk({
  subsets : ['latin'],
  weight : ['500', '700', '800']
})

export const metadata = {
  title: 'Results Summary',
  description: 'Frontend Mentor Challenge made by Juan Pablo Sinkachkuk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen bg-neutral-pale-blue ${hanken.className}`}>{children}</body>
    </html>
  )
}
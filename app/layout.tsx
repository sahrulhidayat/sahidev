import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'
import Header from './ui/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sahidev',
  description: "Sahrul Hidayat's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Louis Miguel Pawaon',
  description: 'Portfolio Website of Louis Miguel Pawaon',
  metadataBase: new URL('https://louispawaon.vercel.app/')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

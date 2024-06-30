import './globals.css'

export const metadata = {
  title: 'Louis Miguel Pawaon',
  description: 'Portfolio Website of Louis Miguel Pawaon',
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

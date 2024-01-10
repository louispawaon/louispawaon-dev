import './globals.css'

export const metadata = {
  title: 'Louis Miguel Pawaon',
  description: 'Personal Portfolio of Louis Pawaon, a Full-Stack Developer from the Philippines',
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

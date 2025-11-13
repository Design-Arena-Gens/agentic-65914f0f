export const metadata = {
  title: 'Cinematic Portrait Generator',
  description: 'Generate luxury fashion photoshoot portraits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

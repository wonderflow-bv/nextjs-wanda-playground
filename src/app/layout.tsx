
export const metadata = {
  title: 'Create Next App + Wanda@12 Playground',
  description: 'Created by Wonderflow Design Team',
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

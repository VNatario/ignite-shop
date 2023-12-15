import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],

  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Ignite shop',
    default: 'Ignite Shop',
  },
  description: 'app de estudo',
  metadataBase: new URL('http://localhost:3000/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.variable}>
      <body className="antialiased bg-base-background text-base-title">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alouvee',
  description: 'Ваше браузерное местечко со всяким всяческим',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`mx-auto min-h-screen max-w-2xl bg-gray-50 bg-gradient-to-tl from-[#eed3fa] to-[#d8d4db] p-4 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full rounded-md border border-none bg-[#fdf6fb] p-4 shadow-lg">
          {children}
        </div>
      </body>
    </html>
  )
}

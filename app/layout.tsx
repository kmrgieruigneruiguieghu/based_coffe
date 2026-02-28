import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}

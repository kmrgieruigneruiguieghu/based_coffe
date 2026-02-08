import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Based Coffee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <header className="bg-[#43302B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">Based Coffee</Link>
              <div className="flex space-x-10 font-medium">
                <Link href="/" className="hover:text-[#D7D683] transition-colors duration-200">Главное</Link>
                <Link href="/menu" className="hover:text-[#D7D683] transition-colors duration-200">Меню</Link>
                <Link href="/about" className="hover:text-[#D7D683] transition-colors duration-200">О нас</Link>
                <Link href="/contacts" className="hover:text-[#D7D683] transition-colors duration-200">Контакты</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gradient-to-b from-[#805A3C] to-[#43302b] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Based Coffee</h3>
                <p className="mt-2">Лучшая базированная кофейня</p>
              </div>
              <div className="text-center md:text-right">
                <p className="">г. Москва, ул. Какая-то, дом 52</p>
                <p className="mt-2">© 2026 Based House. Все права защищены.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

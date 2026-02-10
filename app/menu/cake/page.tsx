import Image from "next/image";
import Link from 'next/link';

export default function Pay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E211D] to-[#805A3C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/menu" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
          ont-bold py-2 px-7 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
        Назад в меню</Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Шоколадное пирожное</h1>
            <div className="mb-4"><p className="text-3xl font-bold">228 ₽</p></div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Описание</h2>
              <p>Настоящий манифест для шоколадных гурманов. Десерт с глубоким, насыщенным вкусом и бархатистой текстурой. Под тонкой глазурью скрывается нежный бисквит и изысканная шоколадная начинка, которая буквально тает во рту. Это концентрированное удовольствие, которое способно превратить обычный перерыв на кофе в маленький праздник.</p>
            </div>
            <Link href="/" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF0000] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Оплата</Link>
          </div>
          <div><img src="/desert.jpg" alt="." className="w-full h-100 rounded-2xl"/></div>
        </div>
      </div>
    </div>
  )
}

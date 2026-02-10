import Image from "next/image";
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E211D] to-[#805A3C]">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white font-bold text-center mb-12">Кофе</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/americano.webp" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Американо</h3>
              <p className="text-black mb-1">Крепкий черный кофе, но не такой концентрированный, как чистый эспрессо</p>
              <p className="text-[#ff3300] text-xl font-bold mb-2">130 ₽</p>
              <Link href="/menu/americano" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Купить</Link>
            </div>
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/cappuccino.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Капучино</h3>
              <p className="text-black mb-1">Классический баланс между кофе и молоком</p>
              <p className="text-[#ff3300] text-xl font-bold mb-2">169 ₽</p>
              <Link href="/menu/cappuccino" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Купить</Link>
            </div>
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/latte.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Латте</h3>
              <p className="text-black mb-1">«Кофе с молоком», мягкий, сливочный, десертный</p>
              <p className="text-[#ff3300] text-xl font-bold mb-2">203 ₽</p>
              <Link href="/menu/latte" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Купить</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white font-bold text-center mb-12">Десерты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/croissant.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Круассаны с шоколадом</h3>
              <p className="text-black mb-1">Классика с золотистой корочкой и нежным мякишем</p>
              <p className="text-[#ff3300] text-xl font-bold mb-2">99 ₽</p>
              <Link href="/menu/croissant" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Купить</Link>
            </div>
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/desert.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Пирожное с шоколадом</h3>
              <p className="text-black mb-1">Глубокий десертный вкус для истинных ценителей сладкого</p>
              <p className="text-[#ff3300] text-xl font-bold mb-2">228 ₽</p>
              <Link href="/menu/cake" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Купить</Link>
            </div>
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/pineapple.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Ананас</h3>
              <p className="text-black mb-1"> Порция свежести и тропического настроения в каждом кусочке</p>
              <p className="text-[#ff3300] text-xl font-bold mb-2">110 ₽</p>
              <Link href="/menu/pineapple" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Купить</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

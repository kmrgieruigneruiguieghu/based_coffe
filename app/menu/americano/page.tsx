import Link from 'next/link'
import Image from 'next/image'

export default function CoffeeDetailPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Кнопка назад */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/menu" className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">Назад в меню</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-96">
                <Image src="/desert.jpg" alt="." fill className="object-cover" priority/>
              </div>
            </div>
          </div>

          {/* Правая колонка - информация */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-[#43302b] mb-2">Эспрессо</h1>
              <p className="text-gray-600 text-lg">30 мл • Крепкий</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-amber-700">250 ₽</span>
                <span className="ml-3 text-xl text-gray-400 line-through">300 ₽</span>
                <span className="ml-4 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-bold">Экономия 50 ₽</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#43302b] mb-4">Описание</h2>
              <p className="text-gray-700 leading-relaxed">
                Классический итальянский эспрессо — это крепкий, насыщенный кофе с богатым вкусом и густой пенкой (крема). 
                Приготовленный из свежемолотых зерен арабики, он обладает ярким ароматом, легкой кислинкой и долгим послевкусием. 
                Идеальный выбор для настоящих ценителей кофе.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#43302b] mb-4">Особенности</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>100% арабика</span>
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Ручной помол</span>
                </li>
                <li className="flex items-center">
<span className="text-amber-500 mr-2">✓</span>
                  <span>Температура 92°C</span>
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Давление 9 бар</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#43302b] mb-4">Состав</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                  Зерна арабики
                </span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                  Вода
                </span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                  Ничего лишнего
                </span>
              </div>
            </div>

            {/* Блок покупки */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600">Время приготовления</p>
                  <p className="text-xl font-bold">3-4 минуты</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xl hover:bg-amber-200">
                    −
                  </button>
                  <span className="text-2xl font-bold">1</span>
                  <button className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xl hover:bg-amber-200">
                    +
                  </button>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] mb-4">
                Добавить в корзину — 250 ₽
              </button>
              
              <button className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold py-4 px-6 rounded-xl text-lg transition-colors duration-300">
                Купить сейчас
              </button>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                Бесплатная доставка от 1000 ₽ • Самовывоз через 15 минут
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

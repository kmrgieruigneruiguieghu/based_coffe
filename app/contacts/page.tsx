import Image from "next/image";
import Link from 'next/link';

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E211D] to-[#805A3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <h1 className="text-4xl md:text-5xl text-center font-bold m-15">Где нас найти</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Местоположение на карте</h2>
            <div className="h-150">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1234567890abcdef&source=constructor" className="w-full h-full"></iframe>
            </div>
          </div>
          <div>
            <div className="m-8">
              <div>
                <p className="text-lg font-bold mb-1">Адрес</p>
                <p>г. Москва, ул. Какая-то, дом 52</p>
              </div>
            </div>
            <div className="my-8 border-t border-white/30"></div>
            <div className="m-8">
              <p className="text-lg font-bold mb-1">Часы работы</p>
              <p>Работаем с 8:00 до 23:00, ежедневно</p>
              <p>Перерыв 13:00-14:00</p>
              <p>В воскресенье сокращенный день с 8:00 до 18:00</p>
            </div>
            <div className="my-8 border-t border-white/30"></div>
            <div className="m-8">
              <p className="text-lg font-bold mb-1">Телефоны</p>
              <p>По вопросам:</p>
              <p className="text-lg text-[#FF0000] my-2">+7 880 555 35 35</p>
              <p>Бронирование столика:</p>
              <p className="text-lg text-[#FF0000] my-2">+7 123 456 78 90</p>
            </div>
            <div className="my-8 border-t border-white/30"></div>
            <div className="m-8">
              <p className="text-lg font-bold">Почта</p>
              <p className="text-lg text-[#FF0000] my-2">sgkalskd@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
            font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
          Назад на главную</Link>
        </div>
      </div>
    </div>
  )
}

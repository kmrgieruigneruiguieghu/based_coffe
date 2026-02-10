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
            <h1 className="text-4xl font-bold mb-6">Латте</h1>
            <div className="mb-4"><p className="text-3xl font-bold">203 ₽</p></div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Описание</h2>
              <p>Самый нежный и деликатный напиток в нашей карте. Латте - это искусство гармонии, где большая порция прогретого паром молока встречается с порцией бодрящего эспрессо под тонким слоем воздушной пенки. У него мягкий, обволакивающий вкус и легкое сливочное тело. Этот кофе создан для долгих прогулок или уютных моментов, когда хочется максимальной нежности и тепла в каждой капле.</p>
            </div>
            <Link href="/" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF0000] text-white
                font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Оплата</Link>
          </div>
          <div><img src="/latte.jpg" alt="." className="w-100 h-100 rounded-2xl"/></div>
        </div>
      </div>
    </div>
  )
}

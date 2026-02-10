import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E211D] to-[#805A3C]">
      <section className="relative min-h-[900] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/coffee.webp" alt="." fill className="object-cover" sizes="100vw" style={{ objectPosition: 'center center' }}/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Кофейня <span className="text-[#D7D683]">Based Coffee</span>
            </h1>
            <p className="text-xl mb-8">
              Лучшая кофейня которую ты когда-либо видел. <br/> Лучше уже не будет</p>
            <Link href="/menu" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
              font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Посмотреть меню</Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white font-bold text-center mb-12">Наша кофейня лучше чем вы думаете и вот почему</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/time.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">График</h3>
              <p className="text-black">Работаем с 8 утра до 11 вечера, 7 дней в неделю</p>
            </div>
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/mnoga_coffee.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Разнобразное кофе</h3>
              <p className="text-black">Капучино, латте, американо, ристретто, холодные, что вашей душе угодно</p>
            </div>
            <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="mb-6 overflow-hidden rounded-xl"><img src="/desert.jpg" alt="." className="w-full h-48 object-cover"/></div>
              <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Разнобразные десерты</h3>
              <p className="text-black">Пирожные, печеньки, выпечка, кремовые десерты, фрукты, орехи</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Интерактив "Бариста"</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Побудь на пол часа баристой за 500 рублей и получишь незабываемый опыт</p>
          <Link href="/contacts" className="inline-flex items-center bg-[#A64B00] hover:bg-[#FF7400] text-white
            font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Связаться для уточнения</Link>
        </div>
      </section>
    </div>
  )
}

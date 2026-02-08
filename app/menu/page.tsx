import Image from "next/image";
import Link from 'next/link';
import time from '../public/time.jpg';
import many_coffee from '../public/mnoga_coffee.jpg';
import desert from '../public/desert.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#43302b] to-[#805A3C]">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наша кофейня лучше чем вы думаете и вот почему</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl blur group-hover:transition-opacity duration-300"></div>
              <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                 duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                <div className="mb-6 overflow-hidden rounded-xl"><Image src={time} alt="." className="w-full h-48 object-cover"/></div>
                <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">График</h3>
                <p className="text-black">Работаем с 8 утра до 11 вечера, 7 дней в неделю</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl blur group-hover:transition-opacity duration-300"></div>
              <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                 duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                <div className="mb-6 overflow-hidden rounded-xl"><Image src={many_coffee} alt="." className="w-full h-48 object-cover"/></div>
                <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Разнобразное кофе</h3>
                <p className="text-black">Капучино, латте, американо, ристретто, холодные, что вашей душе угодно</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl blur group-hover:transition-opacity duration-300"></div>
              <div className="relative bg-[#f8f4f0] p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all
                 duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                <div className="mb-6 overflow-hidden rounded-xl"><Image src={desert} alt="." className="w-full h-48 object-cover"/></div>
                <h3 className="text-xl text-center font-bold text-[#43302b] mb-3">Разнобразные десерты</h3>
                <p className="text-black">Пирожные, печеньки, выпечка, кремовые десерты, фрукты, орехи</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
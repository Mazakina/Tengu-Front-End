import Image from 'next/image'
import example from '@images/outfit-exp.png'
import { roboto } from '@/ui/fonts'

// interface EventProps {
//   url: string
//   images: string[]
//   title: string
//   price: number
// }

export default function EventCard() {
  return (
    <div className=" flex flex-col  items-center w-[280px] h-[510px]">
      <div className="w-[280px] overflow-hidden relative h-[400px]">
        <Image
          alt="product display card"
          fill
          src={example.src}
          className="cursor-pointer transition-all duration-500 hover:scale-105"
        />
      </div>
      <p className={`${roboto} mt-2 font-bold text-base`}>Black Bullet</p>
      <p className={`${roboto} mt-2 text-sm`}>R$ 230,00</p>
    </div>
  )
}

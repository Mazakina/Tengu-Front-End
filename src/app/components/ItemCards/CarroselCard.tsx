import Image from 'next/image'
import example from '@images/outfit-exp.png'
import suka from '@images/Sukajan.png'

import { roboto } from '@/ui/fonts'

// interface EventProps {
//   url: string
//   images: string[]
//   title: string
//   price: number
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CarroselCard({ view }: any) {
  const isEven = view.charCodeAt(0) % 2 === 0
  const url = isEven ? suka.src : example.src
  return (
    <div className=" flex flex-col  items-center w-[280px] h-[440px]">
      <div className="w-[280px] rounded-2xl overflow-hidden relative h-[380px]">
        <Image
          alt="product display card"
          fill
          src={url}
          className="cursor-pointer transition-all duration-700 hover:scale-105"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className={`${roboto} mt-2 font-bold text-base`}>Black Bullet</p>
      <p className={`${roboto} mt-2 text-sm`}>R$ 230,00</p>
    </div>
  )
}

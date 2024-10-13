import Image from 'next/image'
import example from '@images/outfit-exp.png'
import { roboto } from '@/ui/fonts'

// interface EventProps {
//   url: string
//   images: string[]
//   title: string
//   price: number
// }

export default function ProductCard() {
  return (
    <div className=" flex flex-col  items-center w-[265px]">
      <Image
        alt="product display card"
        height={330}
        width={265}
        src={example.src}
        className="cursor-pointer rounded-sm"
      />
      <p className={`${roboto} mt-2 font-bold text-base`}>Black Bullet</p>
      <p className={`${roboto} mt-2 text-sm`}>R$ 230,00</p>
    </div>
  )
}

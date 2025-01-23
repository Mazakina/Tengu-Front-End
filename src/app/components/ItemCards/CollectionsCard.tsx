'use client'

import Image from 'next/image'
import example from '@images/exampleCol.png'
import { roboto } from '@/ui/fonts'
import { IoMdAdd } from 'react-icons/io'
import Link from 'next/link'

// interface CollectionsCardProps {
//   images: string[]
//   type: 'wide' | 'base'
//   title: string
//   price: number
// }

export default function CollectionsCard({ type = 'base' }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function quickBuyHandler(event: any) {
    event.preventDefault()
  }

  const isWide = type === 'wide'
  if (isWide) {
    return (
      <div
        className={` h-[500px] mb-[70px] max-w-[820px] max-h-[570px] rounded-md overflow-hidden col-span-2 row-span-1 flex  justify-center items-center`}
        style={{ backgroundImage: `url("${example.src}")` }}
      >
        <button
          className={` 
          bg-[linear-gradient(to_top,#fff_0%,#fff_50%,#000000cc_50%,#000000cc_100%)]
          bg-[length:auto_200%] 

          p-4           
          font-bold
          uppercase
          text-[#03FFF0]
          rounded-md border
          border-white

          transition-all
          duration-500

          hover:[background-position:bottom]
          hover:text-black
          hover:animate-pop

          `}
        >
          Limited Edition
        </button>
      </div>
    )
  } else {
    return (
      <Link
        href={'./a/s'}
        className={`rounded-md h-[570px] max-w-[820px] max-h-[570px] overflow-hidden col-span-1 row-span-1 flex flex-col justify-between items-center`}
      >
        <div className={`group flex  w-[400px] h-[500px] relative`}>
          <Image
            alt="Product Image"
            height={500}
            width={820}
            src={example.src}
            className={`w-[400px] h-[500px] absolute`}
          />
          <button
            onClick={quickBuyHandler}
            className="
            relative 
            opacity-0 
            flex 
            items-center
            justify-between 
            border
            border-transparent
            group-hover:opacity-100 
            hover:bg-[#20616aa2]
            hover:backdrop-blur-sm
            hover:border-white
            transition-all 
            w-[calc(100%-32px)] 
            mb-4 h-12 px-4 
            mt-auto mx-4 
            rounded-md 
            font-bold
            bg-[#20616A80]"
          >
            <p>Quick Buy</p>
            <IoMdAdd className="text-xl" />
          </button>
        </div>
        <p className={`${roboto} font-bold text-base`}>Black Bullet</p>
        <p className={`${roboto} text-sm`}>R$ 230,00</p>
      </Link>
    )
  }
}

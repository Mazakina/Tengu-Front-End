import { MdOutlineShoppingCart, MdPayment } from 'react-icons/md'
import { BsPatchCheckFill } from 'react-icons/bs'
import { roboto } from '@/ui/fonts'
export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      id="container"
      className={` mx-auto mt-20 relative flex flex-col ${roboto}`}
    >
      <div className="flex mb-4 items-center ">
        <div className={`${roboto} mx-auto items-center relative flex gap-5`}>
          <MdOutlineShoppingCart className="h-6 w-6 text-[#00FFE0]" />
          <p className="text-[#00FFE0]">Cart</p>
          <div
            className={`
          relative 
          w-8
          before:absolute 
          before:[content:""] 
          before:w-full 
          before:h-[2px] 
          before:rounded-md
          before:bg-[#565656]
          before:top-1/2
          after:absolute 
          after:[content:""] 
          after:w-1/2 
          after:h-[2px] 
          after:rounded-md
          after:bg-[#00FFE0]
          after:top-1/2
          `}
          />
          <MdPayment className="h-6 w-6 text-[#00FFE0]" />
          <p className="text-[#00FFE0]">Payment</p>
          <div
            className={`
          relative 
          w-8
          before:absolute 
          before:[content:""] 
          before:w-full 
          before:h-[2px] 
          before:rounded-md
          before:bg-[#565656]
          before:top-1/2
          after:absolute 
          after:[content:""] 
          after:w-1/2 
          after:h-[2px] 
          after:rounded-md
          after:bg-[#00FFE0]
          after:top-1/2
          `}
          />
          <BsPatchCheckFill className="h-6 w-6 text-[#00FFE0]" />
          <p className="text-[#00FFE0]">Confirmation</p>
          <div
            className={`
          relative 
          w-8
          before:absolute 
          before:[content:""] 
          before:w-full 
          before:h-[2px] 
          before:rounded-md
          before:bg-[#565656]
          before:top-1/2
          after:absolute 
          after:[content:""] 
          after:w-1/2 
          after:h-[2px] 
          after:rounded-md
          after:bg-[#00FFE0]
          after:top-1/2
          `}
          />
          <BsPatchCheckFill className="h-6 w-6 text-[#00FFE0]" />
          <p className="text-[#00FFE0]">Completed</p>
        </div>
      </div>
      {children}
    </div>
  )
}

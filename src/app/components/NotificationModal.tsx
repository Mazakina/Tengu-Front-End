import { roboto } from '@/ui/fonts'
import Image from 'next/image'
import { TiArrowSortedUp } from 'react-icons/ti'
import Sukajan from '@images/Sukajan.png'

export default function NotificationModal() {
  return (
    <div className="absolute -mr-2  mt-3 right-0  min-w-60">
      <TiArrowSortedUp className="w-10 ml-auto scale-x-75 h-10" />
      <div
        className={`w-full items-center text-black flex bg-white -mt-5 p-2 rounded-md ${roboto}`}
      >
        Added Black Bull...
        <div className="w-8 h-8 relative">
          <Image
            className="ml-2 rounded-md"
            fill
            src={Sukajan.src}
            alt=""
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}

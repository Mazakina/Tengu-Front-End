import CollectionsCard from '../../components/ItemCards/CollectionsCard'
import { BsFilterLeft } from 'react-icons/bs'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import wideCard from '@images/card-wide-example.png'

// interface PageProps {
//   params: {
//     co: string
//   }
// }

export default function Page() {
  // { params }: PageProps
  return (
    <div className={'bg-c-gray-bg relative'}>
      <section className="flex w-full mt-[76px] gap-2 mx-2 relative justify-between">
        <div className="w-[624px] group overflow-hidden  relative flex   h-[274px] rounded-md bg-white ">
          <Image
            alt=""
            className="
              absolute 
              transition-all 
              duration-500 
              brightness-90
              group-hover:scale-105 
              group-hover:brightness-110 
              top-0 left-0 
              h-[100%!important] 
              w-full
            "
            width={624}
            height={274}
            src={wideCard.src}
          />
          <div className=" mt-auto flex relative justify-end items-center w-full mb-8 h-16 bg-[#00000060]">
            <p className="text-2xl  text-right mr-4 font-bold text-white">
              Limited Edition
            </p>
          </div>
        </div>
        <div className="w-[624px] group overflow-hidden  relative flex   h-[274px] rounded-md bg-white ">
          <Image
            alt=""
            className="
              absolute 
              transition-all 
              duration-500 
              brightness-90
              group-hover:scale-105 
              group-hover:brightness-110 
              top-0 left-0 
              h-[100%!important] 
              w-full
            "
            width={624}
            height={274}
            src={wideCard.src}
          />
          <div className=" mt-auto flex relative justify-end items-center w-full mb-8 h-16 bg-[#00000060]">
            <p className="text-2xl  text-right mr-4 font-bold text-white">
              Limited Edition
            </p>
          </div>
        </div>
        <div className="w-[624px] group overflow-hidden  relative flex   h-[274px] rounded-md bg-white ">
          <Image
            alt=""
            className="
              absolute 
              transition-all 
              duration-500 
              brightness-90
              group-hover:scale-105 
              group-hover:brightness-110 
              top-0 left-0 
              h-[100%!important] 
              w-full
            "
            width={624}
            height={274}
            src={wideCard.src}
          />
          <div className=" mt-auto flex relative justify-end items-center w-full mb-8 h-16 bg-[#00000060]">
            <p className="text-2xl  text-right mr-4 font-bold text-white">
              Limited Edition
            </p>
          </div>
        </div>
      </section>
      <section className="relative mt-24  ">
        <button className="flex ml-28 my-10 border border-transparent hover:bg-black hover:border-white items-center bg-c-gray-button rounded-md p-2">
          {' '}
          <BsFilterLeft className=" mr-2 text-2xl " />
          Filter
        </button>
        <div className=" mx-auto w-fit grid grid-cols-4 gap-5 grid-rows-5">
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard type="wide" />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard type="wide" />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
        </div>

        <ul className=" w-fit ml-auto mr-24 my-8 flex gap-2">

          <li className=" flex items-center justify-center w-8 h-8">
            <a href="">1</a>
          </li>
          <li className=" flex items-center justify-center w-8 h-8">
            <a href="">2</a>
          </li>
          <li className=" flex items-center justify-center w-8 h-8">
            <a href="">3</a>
          </li>
          <li className=" flex items-center justify-center w-8 h-8">
            <a href="">...</a>
          </li>
          <li className=" flex items-center justify-center w-8 h-8">
            <a href="">20</a>
          </li>

        </ul>
      </section>
    </div>
  )
}

'use client'
import Image from 'next/image'
import Sukajan from '@images/Sukajan.png'
import { blanka, roboto } from '@/ui/fonts'
import ProductCard from '@/app/components/ItemCards/ProductCard'
export default function product() {
  return (
    <>
      <section
        className="
      w-[fit] 
      max-w-[100vw]
      mx-auto 
      mb-20
      flex 
      flex-col 
      bg-[#00000050] 
      backdrop-blur-sm    
      justify-center 
      p-20
      rounded-[0_0_6px_6px]
      "
      >
        <div className=" w-fit mb-2 mx-auto flex gap-10 relative">
          <div
            className="grid max-w-[5 0vw] 
              grid-cols-2 grid-rows-3 w-[850px]  items-center mb-2 z-20  gap-2"
          >
            <div className="relative max-w-[23vw]  w-[420px] aspect-[2/3]">
              <Image
                alt="Product image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md  hover:[border:1px_solid_white] [border:1px_solid_transparent]   hover:z-50 transition-all"
                src={Sukajan.src}
              />
            </div>
            <div className="relative max-w-[23vw]  w-[420px] aspect-[2/3]">
              <Image
                alt="Product image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md  hover:[border:1px_solid_white] [border:1px_solid_transparent]   hover:z-50 transition-all"
                src={Sukajan.src}
              />
            </div>
            <div className="relative max-w-[23vw] w-[420px] aspect-[2/3]">
              <Image
                alt="Product image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md  hover:[border:1px_solid_white] [border:1px_solid_transparent]   hover:z-50 transition-all"
                src={Sukajan.src}
              />
            </div>
            <div className="relative max-w-[23vw] w-[420px] aspect-[2/3]">
              <Image
                alt="Product image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md  hover:[border:1px_solid_white] [border:1px_solid_transparent]   hover:z-50 transition-all"
                src={Sukajan.src}
              />
            </div>
            <div className="relative max-w-[23vw] w-[420px] aspect-[2/3]">
              <Image
                alt="Product image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md  hover:[border:1px_solid_white] [border:1px_solid_transparent]   hover:z-50 transition-all"
                src={Sukajan.src}
              />
            </div>
            <div className="relative max-w-[23vw] w-[420px] aspect-[2/3]">
              <Image
                alt="Product image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md  hover:[border:1px_solid_white] [border:1px_solid_transparent]   hover:z-50 transition-all"
                src={Sukajan.src}
              />
            </div>
          </div>
          <div
            id="product-data"
            className={`
              ${roboto} 
              top-20
              h-fit
              w-[690px]
              max-w-[690px] 
              flex flex-col 
              gap-3
              [position:sticky!important]
              `}
          >
            <h3 className={`${blanka} text-2xl`}>Title</h3>
            <p className={` text-xl`}>
              R$234,<span className="text-base">00</span>
            </p>

            <div className="division my-4 h-[1px] w-full bg-white opacity-70" />
            <p className={` text-base`}>
              The Sukajan Jacket blending Japanese craftsmanship and modern
              style for a standout wardrobe essential
            </p>
            <div className="division my-4  h-[1px] w-full bg-white opacity-70" />
            <h4>Size</h4>
            <ul className="[&>*]:py-2 [&>*]:px-3 [&>*]:rounded-md [&>*]:mr-2 [&>*]:cursor-pointer [&>*]:[border:1px_solid_#303030] [&>*:hover]:bg-white [&>*:hover]:text-black transition-all duration-300 flex">
              <li>S</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
            <div className="division my-4 h-[1px] w-full bg-white opacity-70" />
            <h4>Model</h4>
            <ul
              className="
            flex
            [&>*]:py-2
            [&>*]:px-3
            [&>*]:rounded-md
            [&>*]:mr-2
            [&>*]:cursor-pointer
            [&>*]:[border:1px_solid_#303030]
            [&>*:hover]:bg-white
            [&>*:hover]:text-black
            "
            >
              <li>Black and white</li>
              <li>Red Kanji</li>
              <li>Shiro Dragon</li>
            </ul>
            <button
              className="
              transition-all
              duration-300
              w-full 
              text-lg 
              font-bold
              text-black 
              mt-10 
              bg-white 
              py-2 rounded-md 
              hover:bg-c-gray-button 
              hover:text-c-pastel-green
              
             "
            >
              Buy it
            </button>
            <ul className="flex relative mt-10 mx-auto w-full   flex-col gap-3">
              <li className="p-3 rounded-md hover:brightness-105 bg-c-gray-button ">
                Extremely soft • The super stone is not just grabbing an
                explosion of stock! The super moisturizer can be used on the
                skin and is extremely soft, unlike the use of magic cloth, it
                feels more natural, and there will be no deformation, so it is
                very soft and comfortable.
              </li>
              <li className="p-3 rounded-md hover:brightness-105 bg-[#5C5C5C] ">
                Fits well • The hot lacquered cologne features a limited edition
                of red flavors, with low gram weight and touch on the photos.
              </li>
              <li className="p-3 rounded-md hover:brightness-105 bg-c-gray-button ">
                Décor • The clothing is perfect for any type of weather! The ink
                back is great to be used as a New Year's gift."
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 mx-auto mt-16 w-full  relative flex flex-col ">
          <h3
            className={`
            text-3xl 
            mx-auto 
            mb-8 

            ${roboto}`}
          >
            Matching Outfits
          </h3>
          <div className="justify-between w-100% flex">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  )
}

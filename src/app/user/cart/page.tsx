import { roboto } from '@/ui/fonts'

import Image from 'next/image'

export default function Cart() {
  return (
    <div className="flex gap-3">
      <div className="flex-col">
        <section
          className="
            flex 
            [border:1px_solid_white]
            flex-col
            bg-[#00000040]
            rounded
            "
        >
          <h3 className="font-bold m-3 text-base">Select Address</h3>
          <div className="m-3 mt-0 flex items-center">
            <button className="w-6 h-5 mr-3 rounded-full flex items-center justify-center border-2  ">
              <div className="w-[18px] h-[14px] rounded-full bg-[#00FFE0]" />
            </button>
            <div
              className={`
                
                ${roboto}
                p-[10px]
                min-w-[800px]
                [border:1px_solid_white]
                rounded
                w-auto 
                bg-c-gray-button 
                flex 
                items-center 
                text-sm
                justify-between`}
            >
              <p className="font-bold">Home</p>
              <p className="font-normal text-c-gray-400 ">Rua Bavária,2314</p>
              <p className="font-normal text-c-gray-400 ">
                Jardim Ipanema, São Paulo - SP
              </p>
              <p className="font-normal text-c-gray-400 ">CEP 03582-140 </p>
              <p className="font-normal text-c-gray-400 ">Edit</p>
            </div>
          </div>
          <div className="m-3 mt-0 flex items-center">
            <button className="w-6 h-5 mr-3 rounded-full flex items-center justify-center border-2  ">
              <div className="w-[18px] h-[14px] rounded-full bg-[#00FFE0]" />
            </button>
            <div
              className={`
                
                ${roboto}
                p-[10px]
                min-w-[800px]
                [border:1px_solid_white]
                rounded
                w-auto 
                bg-c-gray-button 
                flex 
                items-center 
                text-sm
                justify-between`}
            >
              <p className="font-bold">Home</p>
              <p className="font-normal text-c-gray-400 ">Rua Bavária,2314</p>
              <p className="font-normal text-c-gray-400 ">
                Jardim Ipanema, São Paulo - SP
              </p>
              <p className="font-normal text-c-gray-400 ">CEP 03582-140 </p>
              <p className="font-normal text-c-gray-400 ">Edit</p>
            </div>
          </div>
          <div className="m-3 mt-0 flex items-center">
            <button className="w-6 opacity-0 h-5 mr-3 rounded-full flex items-center justify-center border-2  ">
              <div className="w-[18px] h-[14px] rounded-full bg-[#00FFE0]" />
            </button>
            <div
              className={`
                
                ${roboto}
                p-[10px]
                min-w-[800px]
                [border:1px_solid_white]
                rounded
                w-auto 
                bg-c-gray-button 
                flex                 
                transition
                hover:bg-black
                hover:text-white
                hover:border-white
                items-center 
                text-sm
                justify-between`}
            >
              <p className="font-bold mx-auto">Add new Address</p>
            </div>
          </div>
        </section>
        <section
          className="
            flex 
            [border:1px_solid_white]
            flex-col
            bg-[#00000040]
            rounded
            mt-3
            p-3
            "
        >
          <div className="flex justify-between  items-center">
            <h3 className="font-bold mb-3 text-base">Products</h3>
            <button
              className="
                border
                border-solid 
                border-c-gray-400

                bg-c-gray-button 
                hover:bg-black
                hover:text-white
                hover:border-white
                
                w-22 h-8
                text-c-gray-400
                transition
                text-sm
                mb-2
                px-2
                rounded
              "
            >
              Remove all
            </button>
          </div>
          <div className="w-auto mb-3 h-[1px] bg-white " />
          <div className="flex flex-col">
            <p className="ml-auto  mb-2 mr-3">Total</p>
            <div className="flex items-center mb-3">
              <div className="w-[50px] relative rounded bg-white h-[55px]">
                <Image fill={true} alt="" src="" />
              </div>
              <div className="flex font-[400] text-sm flex-col ml-2 ">
                <h4>Haori Yukata</h4>
                <p>Size: S</p>
                <p>Model: Black and white</p>
              </div>
              <div className=" flex mx-auto flex-col  h-[55px]">
                <p className="flex mt-1 mb-auto ">Quantity</p>
                <div className="flex mb-1 justify-between">
                  <button>a</button>
                  <p>1</p>
                  <button>a</button>
                </div>
              </div>
              <p className="text-base mr-3">R$134,00</p>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-[50px] relative rounded bg-white h-[55px]">
                <Image fill={true} alt="" src="" />
              </div>
              <div className="flex font-[400] text-sm flex-col ml-2 ">
                <h4>Haori Yukata</h4>
                <p>Size: S</p>
                <p>Model: Black and white</p>
              </div>
              <div className=" flex mx-auto flex-col  h-[55px]">
                <p className="flex mt-1 mb-auto ">Quantity</p>
                <div className="flex mb-1 justify-between">
                  <button>a</button>
                  <p>1</p>
                  <button>a</button>
                </div>
              </div>
              <p className="text-base mr-3 ">R$134,00</p>
            </div>
          </div>
          <div className="w-auto  mb-3 h-[1px] bg-white " />
          <div className="flex flex-col mb-3 gap-3">
            <div className=" h-11 rounded px-3 flex items-center justify-between">
              <p>Products Total</p>
              <p className="text-base">R$134,00</p>
            </div>
            <div className=" h-11 rounded px-3 flex items-center justify-between">
              <p>Shipping</p>
              <p className="text-base">R$15,00</p>
            </div>
            <div className=" h-11 rounded bg-c-gray-button px-3 flex items-center justify-between">
              <p>Total</p>
              <p className="text-base">R$149,00</p>
            </div>
          </div>
        </section>
      </div>
      <section
        className="
            flex 
            [border:1px_solid_white]
            flex-col  
            gap-2
            p-3
            h-fit
            bg-[#00000040]
            rounded
            min-w-[390px]
            "
      >
        <h3>Order Summary</h3>
        <div className="flex font-bold mb-3 flex-col gap-1">
          <h4 className="mb-1 font-bold text-xs ">Address</h4>
          <p className="text-xs font-normal text-c-gray-400">
            Rua Bavária, 2314
          </p>
          <p className="text-xs font-normal text-c-gray-400">Jardim, SP</p>
          <p className="text-xs font-normal text-c-gray-400">CEP</p>
        </div>
        <p className="text-xs">Order Status</p>
        <div className=" h-11 rounded px-3  flex items-center justify-between">
          <p className="text-sm">Products</p>
          <p className="text-base">R$149,00</p>
        </div>
        <div className=" h-11 rounded px-3   flex items-center justify-between">
          <p className="text-sm">Shipping</p>
          <p className="text-base">R$149,00</p>
        </div>
        <div className=" h-11 rounded px-3 bg-c-gray-button  flex items-center justify-between">
          <p className="text-sm">Total</p>
          <p className="text-base">R$149,00</p>
        </div>
        <button
          className=" h-11 rounded-sm px-3 [border:1px_solid_gray]
                      hover:bg-white
                      hover:text-c-gray-button
                      flex items-center 
                      justify-center"
        >
          Keep Buying
        </button>
        <button
          className="
            text-c-pastel-green 
            bold h-11 
            rounded-sm px-3 
            bg-c-gray-button  
            flex items-center 
            hover:bg-c-pastel-green
            hover:text-c-gray-button
            justify-center
            transition-all
            duration-300
            "
        >
          Go To Payment
        </button>
      </section>
    </div>
  )
}

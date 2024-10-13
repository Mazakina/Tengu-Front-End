'use client'
import { MdPix } from 'react-icons/md'
import { SiNubank } from 'react-icons/si'
import { CiCreditCard1 } from 'react-icons/ci'
import { roboto } from '@/ui/fonts'
export default function payment() {
  const handleRadioClick = (id) => {
    if (document.getElementById(id)) {
      document.getElementById(id).checked = true
    }
  }
  return (
    <div className="flex mt-10">
      <section className="flex">
        <form className="flex relative min-w-[500px]  flex-col mx-3 gap-3">
          <div
            onClick={() => {
              handleRadioClick('pix')
            }}
            className="flex  p-3 rounded [border:1px_solid_gray]"
          >
            <input type="radio" id="pix" name="fav_language" value="HTML" />
            <label htmlFor="pix" className="ml-3 mr-auto">
              PIX
            </label>
            <MdPix className="ml-auto" />
          </div>

          <div className=" bg-c-gray-button flex flex-col rounded [border:1px_solid_white]">
            <div
              onClick={() => {
                handleRadioClick('credit')
              }}
              className="flex p-3 "
            >
              <input type="radio" id="credit" name="fav_language" value="CSS" />
              <label htmlFor="credit" className="ml-3">
                Credit Card
              </label>
              <CiCreditCard1 className="ml-auto" />
            </div>
            <div className="h-[1px] mx-2 bg-c-gray-300" />
            <input
              className="mt-2 mx-2 [border:1px_solid_gray] bg-c-gray-button p-2"
              type="text"
              placeholder="Card Number"
            />
            <input
              className="mt-2 mx-2 [border:1px_solid_gray] bg-c-gray-button p-2"
              type="text"
              placeholder="Card Owner's Name"
            />
            <div className="grid  m-2 gap-2 grid-cols-2">
              <input
                className=" bg-c-gray-button [border:1px_solid_gray] p-2"
                type="text"
                placeholder="Expiration date"
              />
              <input
                className=" bg-c-gray-button [border:1px_solid_gray] p-2"
                type="text"
                placeholder="Validation Code"
              />
            </div>
            <div className="grid m-2 relative gap-2 grid-cols-2">
              <input
                className=" bg-c-gray-button [border:1px_solid_gray] p-2"
                type="text"
                placeholder="Expiration date"
              />
              <input
                className=" bg-c-gray-button [border:1px_solid_gray] p-2"
                type="text"
                placeholder="Validation Code"
              />
            </div>
            <div className="relative px-2 w-full my-2">
              <label
                className={`${roboto} text-xs absolute bg-c-gray-button px-2 -top-2 left-4 font-normal`}
                htmlFor="payment-method"
              >
                Payment-Method
              </label>
              <input
                className=" bg-c-gray-button [border:1px_solid_gray] w-[100%] p-2 "
                type="text"
                id="payment-method"
                placeholder="Validation Code"
              />
            </div>
          </div>

          <div
            onClick={() => {
              handleRadioClick('nubank')
            }}
            className="flex  p-3 rounded [border:1px_solid_gray]"
          >
            <input
              type="radio"
              id="nubank"
              name="fav_language"
              value="JavaScript"
            />
            <label htmlFor="nubank" className="ml-3">
              NU Payment
            </label>
            <SiNubank className="ml-auto" />
          </div>
        </form>
      </section>
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

        <div className=" h-11 rounded px-3  flex items-center justify-between">
          <p className="text-sm">Products</p>
          <p className="text-base">R$149,00</p>
        </div>
        <button
          className=" h-11 rounded-sm px-3 [border:1px_solid_gray]
                   hover:bg-white
                   hover:text-c-gray-button
                   flex items-center 
                   justify-center"
        >
          Go back to cart
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
          Confirm
        </button>
      </section>
    </div>
  )
}

import Image from 'next/image'

export default function Confirmation() {
  return (
    <div className="flex">
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
          <div className="flex items-center">
            <h3 className="font-bold m-3 text-base">Personal Data</h3>
            <p className="ml-5 text-xs text-[#AFAFAF]">
              *Information to be included on the invoice of the order
            </p>
          </div>
          <div className="grid w-[60vw] grid-cols-3 m-3 mt-1  gap-x-5 gap-y-2 grid-rows-2 text-sm font-normal">
            <p className="w-full break-words">Name: Jhon Doe</p>
            <p className="w-full break-words">CPF: 123.142.321.80</p>
            <p className="w-full break-words">RG: 12.142.321-8</p>
            <p className="w-full break-words">Phone: 11 99999 9999</p>
            <p className="w-full break-words">E-mail: 8.mazakina@gmail.com</p>
            <p className="w-full break-words">ZIP Code: 03582-140</p>
          </div>
        </section>
        <section
          className="
            flex 
            mt-3
            [border:1px_solid_white]
            flex-col
            bg-[#00000040]
            rounded
            "
        >
          <div className="flex items-center">
            <h3 className="font-bold m-3 text-base">Deliver Address</h3>
          </div>
          <div className="flex w-[60vw] justify-between m-3 mt-1 text-sm font-normal">
            <p className="">Rua Bavária</p>
            <p className="">Number: 2310</p>
            <p className="">Neighborhood: Jardim Ipanema</p>
            <p className="">City: São Paulo</p>
            <p className="">ZIP Code: 03582-140</p>
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
          </div>
          <div className="w-auto mb-3 h-[1px] bg-white " />
          <ul className="flex flex-col">
            <p className="ml-auto  mb-2 mr-3">Total</p>
            <li className="flex items-center mt-2  text-sm h-11">
              <div className="h-11 w-11 relative">
                <Image alt="" src={''} fill />
              </div>
              <div className=" ml-4 font-bold">
                <p>Title</p>
                <p className="font-normal   ">Quantity: 1</p>
              </div>
              <div className="ml-10">
                <p>Size: s</p>
                <p>Model: Black and white</p>
              </div>
              <p className="ml-auto text-base">R$134,00</p>
            </li>
            <li className="flex items-center mt-2  text-sm h-11">
              <div className="h-11 w-11 relative">
                <Image alt="" src={''} fill />
              </div>
              <div className=" ml-4 font-bold">
                <p>Title</p>
                <p className="font-normal   ">Quantity: 1</p>
              </div>
              <div className="ml-10">
                <p>Size: s</p>
                <p>Model: Black and white</p>
              </div>
              <p className="ml-auto text-base">R$134,00</p>
            </li>
          </ul>
          <div className="w-auto mt-3 mb-2 h-[1px] bg-white " />
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
         ml-3
         bg-[#00000040]
         rounded
         min-w-[390px]
         "
      >
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
          Complete purchase
        </button>
      </section>
    </div>
  )
}

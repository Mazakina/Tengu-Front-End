'use client'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { IoStorefrontOutline } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsPatchCheckFill, BsMailbox } from 'react-icons/bs'
import { roboto } from '@/ui/fonts'
import Image from 'next/image'
import Division from './Division'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export default function OrderStatusCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="
      w-[1100px] 
      border-solid 
      border  
      rounded-md 
      py-5 
      px-6 
      bg-[#00000020]
      justify-between 
      flex
      flex-col 
      transition-all
      duration-300
      "
    >
      <div className="flex justify-between">
        <div className=" flex flex-col justify-between">
          <h4 className="mb-2 text-base font-bold ">Order</h4>
          <p className="text-base">order-id</p>
        </div>
        <div className=" flex flex-col justify-between">
          <h4 className="mb-2 text-base font-bold ">Status</h4>
          <p className="text-base font-bold text-c-base-blue">In Progress</p>
        </div>
        <div className=" flex flex-col justify-between">
          <h4 className="mb-2 text-base font-bold ">Payment</h4>
          <p className="text-base">Credit card</p>
        </div>
        <div className=" flex flex-col justify-between">
          <h4 className="mb-2 text-base font-bold ">Date</h4>
          <p className="text-base">24/02/2024</p>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className=" flex flex-col justify-between"
        >
          <h4 className=" flex items-center text-base my-auto font-bold ">
            See Details <IoIosArrowDown className=" ml-2 text-2xl  " />
          </h4>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'initial' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <Division />
            <div className="flex  flex-col">
              <h3 className="text-sm mb-2  tracking-wider font-bold">
                Address
              </h3>
              <p className="text-xs ">Rua Bavaria, 2314</p>
              <p className="text-xs text-c-gray-400">Jardim Ipanema</p>
              <p className="text-xs text-c-gray-400">ZIP Code 03241-140</p>
            </div>
            <div>
              <h3 className="text-sm mb-2 mt-4 tracking-wider  font-bold">
                Order Status
              </h3>
              <div className="grid gap-5 w-[90%] grid-cols-5">
                <div className="flex w-full flex-col">
                  <div className=" flex h-8 w-full items-center">
                    <MdOutlineShoppingCart className="h-8 w-8 text-5xl " />
                    <div className="w-[calc(100%-52px)]  ml-5 h-[1px]  bg-white" />
                  </div>
                  <div className="text-xs flex flex-col mr-5">
                    <p className="flex font-bold mt-2">
                      <FaCheck className=" ml-2 mr-5 text-base" />
                      Order received
                    </p>
                    <p className="flex font-bold mt-2">
                      <FaCheck className=" ml-2 mr-5 text-base" />
                      Order received
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className=" flex w-full h-8 items-center">
                    <IoStorefrontOutline className=" h-8 w-8 text-5xl " />
                    <div className="w-[calc(100%-52px)]  ml-5 h-[1px]  bg-white" />
                  </div>
                  <div className="text-xs flex flex-col mr-5">
                    <p className="flex font-bold mt-2">Send to transporter</p>
                    <p className="flex text-[.625rem] mt-1">25/02/2024</p>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className=" flex w-full h-8 items-center">
                    <BsMailbox className="h-8 w-8 text-5xl " />
                    <div className="w-[calc(100%-52px)]  ml-5 h-[1px]  bg-white" />
                  </div>
                  <div className="text-xs flex flex-col mr-5">
                    <p className="flex font-bold mt-2">
                      Order received <br /> by transporter
                    </p>
                    <p className="flex text-[.625rem] mt-1">25/02/2024</p>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className=" flex w-full h-8 items-center">
                    <TbTruckDelivery className="h-8 font-normal w-8 text-5xl " />
                    <div className="w-[calc(100%-52px)]  ml-5 h-[1px]  bg-white" />
                  </div>
                  <div className="text-xs flex flex-col mr-5">
                    <p className="flex font-bold mt-2">
                      Products on the way <br />
                      to deliver
                    </p>
                    <p className="flex text-[.625rem] mt-1">26/02/2024</p>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className=" flex w-full h-8 items-center">
                    <BsPatchCheckFill className="h-8 w-8  text-5xl " />
                  </div>
                  <div className="text-xs flex flex-col mr-5">
                    <p className="flex font-bold mt-2">Products Delivered</p>
                    <p className="flex text-[.625rem] mt-1">26/02/2024</p>
                  </div>
                </div>
              </div>
              <Division />
              <ul className={`${roboto}`}>
                <li className="flex justify-between">
                  <p>Products</p>
                  <p>Total</p>
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
              <Division />
              <ul className={`${roboto}`}>
                <li className="flex px-3 items-center rounded-sm justify-between h-11">
                  <p>Products Total</p>
                  <p>R$225,00</p>
                </li>
                <li className="flex px-3 items-center rounded-sm justify-between h-11">
                  <p>Shipping</p>
                  <p>R$15,00</p>
                </li>
                <li className="flex px-3 items-center rounded-sm bg-c-gray-button justify-between h-11">
                  <p>TOTAL</p>
                  <p>R$240,00</p>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

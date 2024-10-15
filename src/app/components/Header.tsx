'use client'

import { blanka, roboto } from '@/ui/fonts'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoSearch, IoBagOutline } from 'react-icons/io5'
import NotificationModal from './NotificationModal'
import Link from 'next/link'
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <header
        className=" 
      top-0 
      h-0
      left-0
      z-50 
      sticky 
      w-screen
      "
      >
        <div
          className=" 
        bg-[#2c2b2b57] 
        w-screen
        h-14
        items-center 
        px-10 
        flex
        backdrop-blur-sm
        "
        >
          <Link
            href="/"
            className={`
          ${blanka} 
          text-[black]
          [-webkit-text-stroke-color:#EC4B6C]
          [-webkit-text-stroke-width:2px]
          tracking-wider
          text-stroke
          text-xl
          -mt-2
          `}
          >
            TENGU DRIP
          </Link>
          <div className={` ${roboto} flex  gap-14 mx-auto`}>
            <div
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer relative  after:[content:''] after:absolute after:-bottom-2  after:h-[2px] after:left-0 hover:after:w-full after:w-0 after:transition-all after:duration-300 after:bg-white "
            >
              Categories
            </div>
            <div
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer relative  after:[content:''] after:absolute after:-bottom-2  after:h-[2px] after:left-0 hover:after:w-full after:w-0 after:transition-all after:duration-300 after:bg-white ">
              Sale
            </div>
            <div 
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer relative  after:[content:''] after:absolute after:-bottom-2  after:h-[2px] after:left-0 hover:after:w-full after:w-0 after:transition-all after:duration-300 after:bg-white ">
              New in
            </div>
            <div 
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer relative  after:[content:''] after:absolute after:-bottom-2  after:h-[2px] after:left-0 hover:after:w-full after:w-0 after:transition-all after:duration-300 after:bg-white ">
              Shoes
            </div>
            <div 
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer relative  after:[content:''] after:absolute after:-bottom-2  after:h-[2px] after:left-0 hover:after:w-full after:w-0 after:transition-all after:duration-300 after:bg-white ">
              Man Fashion
            </div>
            <div 
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer relative  after:[content:''] after:absolute after:-bottom-2  after:h-[2px] after:left-0 hover:after:w-full after:w-0 after:transition-all after:duration-300 after:bg-white ">
              Woman Clothing
            </div>
            <div 
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer relative  after:[content:''] after:absolute after:-bottom-2  after:h-[2px] after:left-0 hover:after:w-full after:w-0 after:transition-all after:duration-300 after:bg-white ">
              Accessories
            </div>
          </div>
          <div
            className="flex
          [&>div>*]:w-6 
          [&>div>*]:h-6 
          [&>div>*:first-child:hover]:text-[#EC4B6C]
          gap-3
          "
          >
            <div>
              <FaUserCircle />
            </div>
            <div className="relative">
              <IoBagOutline />
              <NotificationModal />
            </div>
            <div>
              <IoSearch />
            </div>
          </div>
        </div>
      </header>
      <div
        className={`
        top-14 
        z-50 
        sticky 
        w-screen
        h-0
        left-0
     `}
      >
        <div
          className={`
            absolute
            transition-all
            duration-300
            w-full
        bg-[#2c2b2b57] 
            backdrop-blur-sm
            text-sm  
            flex
            flex-col
            overflow-hidden
            ${isModalOpen ? ' h-40 ' : ' h-0  '}
            ${roboto}
          `}
          onMouseLeave={() => setIsModalOpen(false)}
        >
          <div
            className="
              m-4 gap-4  
              [&>*]:cursor-pointer
              flex flex-col
            "
          >
            <Link href="/collections/a">Something</Link>
            <Link href="/collections/a">Something</Link>
            <Link href="/collections/a">Something</Link>
            <Link href="/collections/a">Something</Link>
          </div>
        </div>
      </div>
      <div
        className="
        top-14 
        z-50 
        sticky 
        h-0
        left-0
        hidden
        "
      >
        <div
          className="
            absolute
            w-[400px]
            bg-white

            right-0
            h-[calc(100vh-56px)]  
          "
        ></div>
      </div>
    </>
  )
}

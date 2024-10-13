'use client'
import { blanka, roboto } from '@/ui/fonts'
import HeroPic from '@images/Hero.png'
import Image from 'next/image'
import EventCard from './components/ItemCards/EventCard'
import SukajanPic from '@images/Sukajan.png'
import Crossing from '@images/Crossing.svg'
import concave from '@images/concave.svg'
import ScrollViewer from './components/scrollViewer'
import BorderedContainer from './components/BorderedContainer'
import LedBorderCard from './components/ledBorderCard'

export default function Home() {
  return (
    <main className="flex flex-col relative max-w-[100dvw] min-h-screen h-fit  ">
      <div className="w-0 h-0 top-0 sticky">
        <Image
          alt=""
          height={976}
          width={1920}
          className=" h-screen top-0 sticky min-w-[100vw] "
          src={HeroPic.src}
        />
      </div>
      <section
        id="hero"
        className={`flex flex-col w-[100%] top-0 left-0  absolute  `}
      >
        <div className="relative flex flex-col h-[67vh]  w-[100svw] mt-[40vh]">
          <div
            className="
            grid
            grid-cols-[1fr,580px,1fr]
            h-fit 
            gap-0
            w-[100%] 
             "
          >
            <div className="px-auto bg-c-gray-bg" />
            <Image src={concave} alt="" />
            <div className="w-auto bg-c-gray-bg" />
          </div>
          <div className="flex w-full h-full bg-c-gray-bg">
            <div
              className="
              grid 
              relative  
              z-10 
              min-w-[400px] 
              w-[45%] 
              max-h-[380px] 
              mt-5 
              mb-[25px] 
              pl-[25px] 
              bg-blue 
              h-460px 
              gap-4
              "
              style={{
                gridTemplateColumns:
                  '[col-one] 1fr [col-two] 1fr [col-three] 1fr [col-four] 1fr [col-five] 1fr [col-six] 1fr',
                gridTemplateRows: '[row-one] 1fr [row-two] 1fr [row-three] 1fr',
              }}
            >
              <LedBorderCard extendedClass=" row-start-1 row-end-2 col-start-1 col-end-3" />
              <LedBorderCard extendedClass=" row-start-1 row-end-4 col-start-3 col-end-4" />
              <LedBorderCard extendedClass=" row-start-1 row-end-2 col-start-4 col-end-7" />
              <LedBorderCard extendedClass=" h-3/4 mt-auto row-start-2 row-end-4 col-start-1 col-end-2 " />
              <LedBorderCard extendedClass=" row-start-2 row-end-4 col-start-2 col-end-3 " />
              <LedBorderCard extendedClass=" row-start-2 row-end-3 col-start-4 col-end-6" />
            </div>
            <p
              className={`
            relative 
            mt-5
            pr-20 
            text-[4rem] 
            text-right 
            font-bold 
            leading-normal
            tracking-wider  
            ml-auto 
            ${blanka}
            text-transparent  
            outline-4 
            text-stroke
            `}
            >
              JAPANESE
              <br /> STREETWEAR: <br /> FUSION OF CULTURE <br /> AND STYLE
            </p>
          </div>
        </div>
      </section>
      <div
        className="
        mt-[106.5vh] h-[88px] 
        w-full
        bg-[#B4B4B480] 
        backdrop-blur-md
      "
      />
      <section
        id="event"
        className="flex flex-col relative  bg-c-gray-bg w-full"
      >
        <ScrollViewer />

        <div
          id="info-container"
          className=" my-[200px] gap-4 pb-20 px-10 grid grid-cols-2 grid-rows-3 w-full h-[1000px] "
        >
          <div className=" row-span-3 flex items-center justify-center">
            <BorderedContainer src={SukajanPic.src} height={720} margin={16} />
          </div>
          <div className=" flex items-center row-span-1">
            <BorderedContainer src={SukajanPic.src} height={240} margin={12} />
            <div className="flex ml-6  flex-col">
              <h3 className={`text-3xl mb-6 ${blanka}`}>THE SUJAKAN JACKET</h3>
              <p className={`text-2xl w-[70%] ${roboto}`}>
                Japanese craftsmanship and modern style for a standout
              </p>
            </div>
          </div>
          <div className=" flex items-center row-span-1">
            <div className="flex ml-6  flex-col">
              <h3 className={`text-3xl mb-6 ${blanka}`}>THE SUJAKAN JACKET</h3>
              <p className={`text-2xl w-[70%] ${roboto}`}>
                Japanese craftsmanship and modern style for a standout
              </p>
            </div>
            <BorderedContainer src={SukajanPic.src} height={240} margin={12} />
          </div>
          <div className=" flex items-center row-span-1">
            <BorderedContainer src={SukajanPic.src} height={240} margin={12} />
            <div className="flex ml-6  flex-col">
              <h3 className={`text-3xl mb-6 ${blanka}`}>THE SUJAKAN JACKET</h3>
              <p className={`text-2xl w-[70%] ${roboto}`}>
                Japanese craftsmanship and modern style for a standout
              </p>
            </div>
          </div>
        </div>
      </section>
      <Image
        alt=" "
        src={Crossing}
        className=" relative bg-[#F7F2E780]  backdrop-blur-sm  "
        height={140}
        width={1920}
      />
      <section className="pt-20  flex flex-col relative bg-c-gray-bg">
        <div className="h-fit mb-4 mx-auto">
          <button></button>
          <p className={`${roboto} text-xl `}> Most Popular</p>
          <button></button>
        </div>
        <div className="w-full justify-around flex">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <div className="w-full justify-around flex">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
      <section id="footer" className="mt-48"></section>
    </main>
  )
}

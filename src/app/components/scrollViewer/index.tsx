'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import CarroselCard from '../ItemCards/CarroselCard'
import { blanka, roboto } from '@/ui/fonts'
import DirectLeftSvg from '@/svgs/DirectLeft'

export default function ScrollViewer() {
  const [bouncer, setBouncer] = useState(false)
  const [additional, setAdditional] = useState(260)
  const views = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
  ]
  const [array, setArray] = useState<string[]>([])

  function getItemsFromArray(
    array: string[],
    startIndex: number,
    itemCount: number,
  ) {
    const length = array.length
    const result = [array[additional % length]]
    for (let i = startIndex; result.length < itemCount; i++) {
      const index = (i + 1) % length
      result.push(array[index])
    }
    console.log(result)
    setArray(result)
  }

  function moveBouncer(value: number) {
    if (!bouncer) {
      setBouncer(true)
      setAdditional((prevValue) => prevValue + value)
      setTimeout(() => setBouncer(false), 300)
    }
  }

  function scrollEvent(event: React.WheelEvent) {
    if (event.deltaY > 0) {
      moveBouncer(1)
    }
    if (event.deltaY < 0) {
      moveBouncer(-1)
    }
  }

  useEffect(() => {
    getItemsFromArray(views, additional, 9)
  }, [additional])

  return (
    <>
      <div className="mt-[120px]  flex items-center w-fit h-fit pl-20 ml-auto mr-[10%] ">

        <p className={
          `${blanka}  
          leading-normal 
          text-[96px] 
            font-bold 
          text-transparent  
          outline-4 
          text-stroke
          `}>CHECK OUT OUR<br/> &nbsp;&nbsp;&nbsp;&nbsp; NEWEST RELEASES</p>
      </div>
      <motion.div
        className="
        w-[94vw] 
        h-[400px] 
        mt-[100px] 
        relative  
        overscroll-contain
        mx-auto flex 
        "
        onWheel={scrollEvent}
        onMouseEnter={() => {
          document.body.classList.add('overflow-y-hidden')
        }}
        onMouseLeave={() => {
          document.body.classList.remove('overflow-y-hidden')
        }}
      >
        {array.map((view, index) => {
          return <ScrollSlot index={index} view={view} key={view} />
        })}
      </motion.div>
    </>
  )
}

export function ScrollSlot({ index, view }: { index: number; view: string }) {
  let classExtension = ''
  switch (index) {
    case 8:
      classExtension =
        '-mt-[150px]  brightness-[.4] opacity-0 left-[calc(120px*.90)] scale-75 absolute '
      break
    case 7:
      classExtension =
        '-mt-[80px] brightness-[.4] left-[calc(120px*.90)] scale-90 absolute  z-10 '
      break
    case 6:
      classExtension = '-mt-[30px] absolute left-[170px] z-20'
      break
    case 5:
      classExtension = '-mt-[4px] absolute z-30 left-[30%]  '
      break
    case 4:
      classExtension = ' absolute left-[50%] z-40   '
      break
    case 3:
      classExtension = '-mt-[4px]  absolute z-30 left-[70%] '
      break
    case 2:
      classExtension = '-mt-[30px]  left-[calc(100%-170px)] absolute  z-20'
      break
    case 1:
      classExtension =
        '-mt-[80px] left-[calc(100%-120px*.9)]  scale-90 absolute brightness-[.4] z-10 '
      break
    case 0:
      classExtension =
        'mt-[20px] opacity-0 left-[calc(100%-80px)]  scale-50 absolute brightness-[.4] '
      break
  }
  return (
    <motion.div
      className={
        classExtension + ' -translate-x-1/2   transition-all duration-500'
      }
    >
      <CarroselCard view={view} />
    </motion.div>
  )
}

'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import HeroPic from '@images/Hero.png'
import { roboto } from '@/ui/fonts'

interface LedborderCardProps {
  extendedClass?: string
}

export default function LedBorderCard({
  extendedClass = '',
}: LedborderCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [postition, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect()
      setPosition({
        x: Number(e.clientX - rect.left),
        y: Number(e.clientY - rect.top),
      })
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={() => console.log(' asd')}
      ref={divRef}
      className={
        ` 
    group
    overflow-hidden
     relative rounded-md p-[5px]
    before:w-full 
    before:h-full 
    before:[border:5px_solid_#3e7972] 
    before:absolute
    before:top-0
    before:left-0
    before:[content:'']  
    transition-all
    duration-500
    
    ` + extendedClass
      }
    >
      <div
        className={`
      absolute w-40 h-40    
      -translate-y-1/2 
      -translate-x-1/2 
      rounded-full
      opacity-0
      group-hover:opacity-100
      brightness-[3]
      [transition:_opacity_.3s_ease-in-out]
      blur-2xl
      [background:radial-gradient(#2eff58,#4DC8B9)]
      mix-blend-overlay
      `}
        style={{ left: postition.x, top: postition.y }}
      />
      <div
        className="
      bg-white w-full 
      cursor-pointer h-full relative rounded-sm [border:solid_black_8px] overflow-hidden"
      >
        <Image
          alt=""
          className="group-hover:brightness-50 brightness-100 transition-all
          delay-150
          group-hover:delay-[0.01s]
          duration-300"
          fill
          style={{ objectFit: 'cover' }}
          src={HeroPic.src}
        />
        <p
          className={`
          group-hover:opacity-100 
          opacity-0 
          transition-all 
          duration-300 
          group-hover:delay-150
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          ${roboto}
          text-lg
          `}
        >
          Category
        </p>
      </div>
    </div>
  )
}

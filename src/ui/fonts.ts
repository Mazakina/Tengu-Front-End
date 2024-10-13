import { Roboto_Mono as RobotoMono } from 'next/font/google'
import localFont from 'next/font/local'

const robotoObj = RobotoMono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const blankaObj = localFont({
  src: '../../public/Blanka.otf',
  preload: true,
})

export const blanka = blankaObj.className
export const roboto = robotoObj.className

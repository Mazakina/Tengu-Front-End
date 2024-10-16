import type { Metadata } from 'next'
import './globals.css'
import { roboto } from '@/ui/fonts'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={roboto + 'bg-[#20202B] relative w-[100%] overflow-x-hidden'}
      >
        <Header />

        {children}
      </body>
    </html>
  )
}

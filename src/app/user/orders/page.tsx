'use client'

import { roboto } from '@/ui/fonts'
import OrderStatusCard from '../../components/orders/OrderStatusCard'
import Link from 'next/link'

export default function Orders() {
  return (
    <section className="relative mt-12 min-w-[90%] flex flex-col items-center">
      <ul
        className={`${roboto} flex mb-5 mt-10 items-center justify-around w-[80%]`}
      >
        <Link href="/" className="text-sm">
          Return to Store
        </Link>
        <li className="text-2xl">Your Orders</li>
        <li className="text-sm">Logout</li>
      </ul>
      <div className={` ${roboto} flex w-fit gap-3   flex-col`}>
        <OrderStatusCard />
        <OrderStatusCard />
        <OrderStatusCard />
      </div>
    </section>
  )
}

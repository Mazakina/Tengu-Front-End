import background from '@images/background.png'
import Image from 'next/image'
export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main
      className={`flex flex-col relative max-w-[100dvw] min-h-screen h-fit `}
    >
      <div className="w-0 h-0 top-0 sticky">
        <Image
          alt=""
          height={976}
          width={1920}
          className=" h-screen brightness-0 grayscale top-0 sticky min-w-[100vw] "
          src={background.src}
        />
      </div>
      {children}
    </main>
  )
}

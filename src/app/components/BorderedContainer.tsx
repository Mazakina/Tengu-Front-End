import Image from 'next/image'

interface BorderedContainerProps {
  src: string
  margin: number
  height: number
}

export default function BorderedContainer({
  src,
  margin,
  height,
}: BorderedContainerProps) {
  return (
    <div className={`[border:solid_white_1px]  rounded-2xl  `}>
      <div
        className={'aspect-square  relative  rounded-xl overflow-hidden'}
        style={{ height, margin }}
      >
        <Image alt="" fill src={src} />
      </div>
    </div>
  )
}

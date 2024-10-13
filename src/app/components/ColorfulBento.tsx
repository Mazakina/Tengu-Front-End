import React from 'react'

interface ColorfulBentoProps {
  icon: React.ReactElement
  style: 'primary' | 'secondary' | 'tertiary' | 'quartenary' | 'quinary'
  type: 'positive' | 'negative'
  title: string
  content: string
  gain: string
}

export default function ColorfulBento({
  icon,
  style = 'primary',
  type = 'positive',
  title,
  content,
  gain,
}: ColorfulBentoProps) {
  const styleClasses = {
    primary: {
      container: 'bg-c-pastel-blue border-c-pastel-blue',
      text: 'text-c-pastel-blue',
    },
    secondary: {
      container: 'bg-c-pastel-green border-c-pastel-green',
      text: 'text-c-pastel-green',
    },
    tertiary: {
      container: 'bg-c-pastel-orange border-c-pastel-orange',
      text: 'text-c-pastel-orange',
    },
    quartenary: {
      container: 'bg-c-pastel-red border-c-pastel-red',
      text: 'text-c-pastel-red',
    },
    quinary: {
      container: 'bg-c-pastel-lilac border-c-pastel-lilac',
      text: 'text-c-pastel-lilac',
    },
  }
  const typeClasses = {
    positive: 'text-c-positive',
    negative: 'text-c-negative',
  }
  const color = styleClasses[style]

  return (
    <div
      className={`
      ${color.container}
      flex 
      flex-col
      bg-opacity-20
      border
      transition-all
      hover:brightness-110
      hover:bg-opacity-10
      justify-between
      px-4
      rounded-md
      w-[287px] h-[105px]
      `}
    >
      <div
        className="
        flex text-sm items-center justify-between w-full mt-3 mb-1
        "
      >
        <p>{title}</p>
        {React.cloneElement(icon, {
          className: `${icon.props.className} h-[20px] w-[20px] ${color.text} `,
        })}
      </div>
      <div className="mb-3">
        <p className=" text-xl font-bold">{content}</p>
        <div
          className={`
        ${typeClasses[type]}
        flex 
        text-[12px]
        items-center
        w-full
        rounded-lg
        shadow-md
        `}
        >
          {gain + '%'}
          <p className="ml-1 text-c-gray-400">vs last month</p>
        </div>
      </div>
    </div>
  )
}

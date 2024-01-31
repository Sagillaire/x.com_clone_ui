import { FC } from 'react'

interface IText {
  text: string;
  type?: 'normal' | 'caption' | 'mark'
}

enum EnumText {
  normal = 'text-white',
  mark = 'text-blue-500',
  caption = 'text-[gray]',
}

export const Text: FC<IText> = ({ text, type = 'normal' }) => {
  return (
    <p className={`${EnumText[type]} text-xs`}>
      {text}
    </p>
  )
}

import { FC } from 'react'

interface IText {
  text: string;
  type?: 'normal' | 'caption'
}

enum EnumText {
  normal = 'text-white',
  caption = 'text-[gray]'
}

export const Text: FC<IText> = ({ text, type = 'normal' }) => {
  return (
    <p className={`${EnumText[type]} text-xs`}>
      {text}
    </p>
  )
}

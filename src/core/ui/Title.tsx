import { FC } from 'react'

interface ITitle {
  size?: TSize;
  title: string;
}

type TSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xl2' | 'xl3'

enum EnumSize {
  xs = 'text-xs',
  sm = 'text-sm',
  base = 'text-base',
  lg = 'text-lg',
  xl = 'text-xl',
  xl2 = 'text-2xl',
  xl3 = 'text-3xl',
}

export const Title: FC<ITitle> = ({ title, size = 'sm' }) => {
  return (
    <h4 className={`${EnumSize[size]} font-bold`}>
      {title}
    </h4>
  )
}

import { FC } from 'react'

interface ITitle {
  title: string;
}

export const Title: FC<ITitle> = ({ title }) => {
  return (
    <h4 className='text-sm font-bold'>
      {title}
    </h4>
  )
}

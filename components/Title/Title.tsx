import { ReactNode } from 'react'
import style from './style.module.scss'

interface TitleProps {
  align?: 'left' | 'center' | 'right'
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: ReactNode
}

export function Title({
  align = 'left',
  type = 'h2',
  children
}: TitleProps): JSX.Element {
  const CustomTag = type as keyof JSX.IntrinsicElements

  return (
    <CustomTag className={`${style.title} ${style[align]} ${style[type]}`}>
      {children}
    </CustomTag>
  )
}

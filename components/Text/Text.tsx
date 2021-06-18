import { ReactNode } from 'react'
import style from './style.module.scss'

interface TextProps {
  align?: 'left' | 'center' | 'right'
  type?: 'text-large' | 'text-medium' | 'text-normal' | 'text-small'
  weight?: 'regular' | 'bold'
  children: ReactNode
}

export function Text({
  align = 'left',
  type = 'text-normal',
  weight = 'regular',
  children,
  ...rest
}: TextProps): JSX.Element {
  return (
    <p
      {...rest}
      className={`${style.Text} ${style[align]} ${style[type]} ${style[weight]}`}
    >
      {children}
    </p>
  )
}

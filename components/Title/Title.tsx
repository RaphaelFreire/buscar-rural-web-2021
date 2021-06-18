import { ReactNode } from 'react'
import style from './style.module.scss'

interface TitleProps {
  align?: 'left' | 'center' | 'right'
  type?:
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
  children?: ReactNode
}

export function Title({
  align = 'left',
  type,
  children,
  ...rest
}: TitleProps): JSX.Element {
  if (type === 'heading-1') {
    return (
      <h1 {...rest} className={`${style.title} ${style[align]} ${style[type]}`}>
        {children}
      </h1>
    )
  }

  if (type === 'heading-2') {
    return (
      <h2 {...rest} className={`${style.title} ${style[align]} ${style[type]}`}>
        {children}
      </h2>
    )
  }

  if (type === 'heading-3') {
    return (
      <h3 {...rest} className={`${style.title} ${style[align]} ${style[type]}`}>
        {children}
      </h3>
    )
  }

  if (type === 'heading-4') {
    return (
      <h4 {...rest} className={`${style.title} ${style[align]} ${style[type]}`}>
        {children}
      </h4>
    )
  }

  if (type === 'heading-5') {
    return (
      <h5 {...rest} className={`${style.title} ${style[align]} ${style[type]}`}>
        {children}
      </h5>
    )
  }

  if (type === 'heading-6') {
    return (
      <h6 {...rest} className={`${style.title} ${style[align]} ${style[type]}`}>
        {children}
      </h6>
    )
  }

  return (
    <h2
      {...rest}
      className={`${style.title} ${style[align]} ${
        style[(type = 'heading-2')]
      }`}
    >
      {children}
    </h2>
  )
}

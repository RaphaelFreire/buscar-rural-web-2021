import { ReactNode, ButtonHTMLAttributes } from 'react'
import style from './style.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'normal' | 'medium' | 'large'
  children: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'normal',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      {...rest}
      className={`${style.button} ${style[variant]} ${style[size]}`}
    >
      {children}
    </button>
  )
}

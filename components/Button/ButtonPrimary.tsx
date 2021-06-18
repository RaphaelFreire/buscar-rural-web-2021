import { ReactNode, ButtonHTMLAttributes } from 'react'
import style from './style.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
}

export function Button({
  children,
  variant,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button {...rest} className={`${style.button} ${style[variant]}`}>
      {children}
    </button>
  )
}

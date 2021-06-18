import { InputHTMLAttributes } from 'react'
import style from './style.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Input({ ...rest }: InputProps): JSX.Element {
  return <input {...rest} className={`${style.input}`} />
}

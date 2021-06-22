import { InputHTMLAttributes } from 'react'
import style from './style.module.scss'
import { UserCircleIcon } from '@heroicons/react/outline'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  icon: true
}

export function Input({ ...rest }: InputProps): JSX.Element {
  return (
    <div className={`${style.field} ${style.icon}`}>
      <UserCircleIcon className={`${style.ico}`} />
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Jane Appleseed"
        className={`${style.input} ${style.icon}`}
      />
      <label htmlFor="fullname" className={`${style.label}`}>
        Name
      </label>
    </div>
  )
}

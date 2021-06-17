import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonPrimaryProps extends ButtonProps {
  children: ReactNode
}

export const ButtonPrimary = function ButtonPrimary({
  children,
  ...rest
}: ButtonPrimaryProps): JSX.Element {
  return <Button {...rest}>{children}</Button>
}

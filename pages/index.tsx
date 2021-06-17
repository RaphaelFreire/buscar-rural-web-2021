import { Box } from '@chakra-ui/react'
import { ButtonPrimary } from '../components/Button/ButtonPrimary'

import styles from '../styles/components/ButtonPrimary.module.css'

export default function Home(): JSX.Element {
  return (
    <Box>
      <ButtonPrimary className={styles.buttonPrimary}>
        Cadastre-se agora
      </ButtonPrimary>
    </Box>
  )
}

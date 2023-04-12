import {FC} from 'react'

import styles from './Footer.module.scss'
import {Container} from '@/components/ui'
import { useDarkMode } from 'usehooks-ts'
import cn from 'classnames'

export const Footer: FC = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <footer className={cn(styles.footer, isDarkMode && styles.dark)}>
      <Container>
        FOOTER
      </Container>
    </footer>
  )
}

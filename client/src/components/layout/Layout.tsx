import {FC, PropsWithChildren} from 'react'
import { useDarkMode } from 'usehooks-ts'

import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import cn from 'classnames'
import {Container} from '@/components/ui'

import styles from './Layout.module.scss'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <div className={styles.layout}>
      <Header />
      <main className={cn(styles.main, isDarkMode && styles.dark)}>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

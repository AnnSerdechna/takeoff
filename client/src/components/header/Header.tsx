import {FC} from 'react'
import {useDarkMode, useMediaQuery} from 'usehooks-ts'
import cn from 'classnames'

import {Container} from '@/components/ui'
import {
  HeaderMenu,
  SearchBar,
  Switch
} from '@/components/header/components'
import {Logo} from '@/components/logo/Logo'
import styles from './Header.module.scss'
import {CartIcon, HeartIcon, UserIcon} from '@/components/header/components/icons/Icon'

const HeaderContentMobile: FC = () => (
  <div className={styles.headerMobile}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <div className={styles.contentMobile}>
      <div className={styles.icons}>
        <div className={styles.iconsStart}>
          <UserIcon />
          <SearchBar />
          <Switch />
        </div>
        <div className={styles.iconsEnd}>
          <HeartIcon />
          <CartIcon />
        </div>
      </div>
    </div>
    <HeaderMenu />
  </div>
)

export const Header: FC = () => {
  const { isDarkMode } = useDarkMode()
  const isTablet = useMediaQuery('(max-width: 768px)')

  return (
    <header className={cn(styles.header, isDarkMode && styles.dark)}>
      <Container>
        {!isTablet ? (
          <div className={styles.content}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.switchWrap}>
              <Switch />
            </div>

            <div className={styles.menuWrap}>
              <HeaderMenu />
            </div>

            <div className={styles.contentEnd}>
              <SearchBar />
              <div className={styles.iconsGroup}>
                <UserIcon />
                <div className={styles.iconsEnd}>
                  <HeartIcon />
                  <CartIcon />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <HeaderContentMobile />
        )}
      </Container>
    </header>
  )
}

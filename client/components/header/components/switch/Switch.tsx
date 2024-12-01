'use client'
import { FC } from 'react'
import cn from 'classnames'
import { useDarkMode, useMediaQuery } from 'usehooks-ts'

import styles from './Switch.module.scss'
import { SunIcon, MoonIcon } from '@/components/header/components/icons/Icon'

export const Switch: FC = () => {
  const { isDarkMode, toggle, set } = useDarkMode()
  const isTablet = useMediaQuery('(max-width: 768px)')

  return (
    <button
      className={cn(isTablet ? styles.switchTablet : styles.switch, isDarkMode && styles.dark)}
      onClick={() => {
        toggle
        console.log('Click', toggle, isDarkMode);
        
      }}
    >
      <div className={styles.iconWrap}>
        {isDarkMode
          ? <SunIcon className={styles.sunIcon} />
          : <MoonIcon className={styles.moonIcon} />
        }
      </div>
    </button>
  )
}

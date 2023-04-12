import {FC} from 'react'
import cn from 'classnames'
import { useDarkMode, useMediaQuery } from 'usehooks-ts'

import styles from './Switch.module.scss'
import { SunIcon, MoonIcon } from '@/components/header/components/icons/Icon'

export const Switch: FC = () => {
  const { isDarkMode, toggle } = useDarkMode()
  const isTablet = useMediaQuery('(max-width: 768px)')

  return (
    <div
      className={cn(isTablet ? styles.switchTablet : styles.switch, isDarkMode && styles.dark)}
      onClick={toggle}
    >
      <div className={styles.iconWrap}>
        {isDarkMode
          ? <SunIcon className={styles.sunIcon} />
          : <MoonIcon className={styles.moonIcon} />
        }
      </div>
    </div>
  )
}

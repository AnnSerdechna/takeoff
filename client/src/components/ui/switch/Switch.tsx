import {FC} from 'react'
import cn from 'classnames'
import { useDarkMode } from 'usehooks-ts'
import Image from 'next/image'

import SunIcon from '@/assets/icons/sun.svg'
import MoonIcon from '@/assets/icons/moon.svg'
import styles from './Switch.module.scss'

export const Switch: FC = () => {
  const { isDarkMode, toggle } = useDarkMode()

  return (
    <div
      className={cn(styles.switch, isDarkMode && styles.dark)}
      onClick={toggle}
    >
      <div className={styles.iconWrap}>
        {isDarkMode
          ? <Image src={SunIcon} alt={'Light theme'} />
          : <Image src={MoonIcon} alt={'Dark theme'} />
        }
      </div>
    </div>
  )
}

import {FC} from 'react'
import { useDarkMode } from 'usehooks-ts'
import cn from 'classnames'

import styles from './Button.module.scss'
import {ButtonProps} from '@/types'

export const Button: FC<ButtonProps> = ({ btnText }) => {
  const { isDarkMode } = useDarkMode()

  return (
      <button className={cn(styles.button, isDarkMode && styles.dark)}>
        {btnText}
      </button>
  )
}
